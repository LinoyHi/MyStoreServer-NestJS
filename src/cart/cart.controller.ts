import { Controller, Get, Post, Body, Patch, Param, Delete, Session, HttpException, HttpStatus } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get('/:username')
  findOne(@Param('username') username: string, @Session() session: Record<string, any>) {
    if(session.user?.name){
      if(session.user?.name == username){
        return this.cartService.findOneByUsername(username);
      }
    }
    throw new HttpException ('no user found', HttpStatus.NOT_FOUND)
  }

  @Get('recommended/:username')
  findRecs(@Param('username') username: string, @Session() session: Record<string, any>) {
    if(session.user?.name){
      if(session.user?.name == username){
        return this.cartService.findRecommendedForUsername(username);
      }
    }
    throw new HttpException ('no user found', HttpStatus.NOT_FOUND)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Session() session:Record<string,any>) {
    if (!session.user) {
      throw new HttpException('no user is connected', HttpStatus.NOT_FOUND);
    }
    return this.cartService.remove(+id,session.user.name);
  }
}
