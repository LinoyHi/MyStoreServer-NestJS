import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Session } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { User } from 'src/users/entities/user.entity';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(@Body() newwishlistItem: {product:number,user:string},@Session() session:Record<string,any>) {
    newwishlistItem.user= session.user?.name
    if(newwishlistItem.user){
      return this.wishlistService.create(newwishlistItem);
    }
    throw new HttpException('no user conected', HttpStatus.NOT_FOUND)
  }

  @Get()
  findAll() {
    return this.wishlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishlistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWishlistDto: UpdateWishlistDto) {
    return this.wishlistService.update(+id, updateWishlistDto);
  }

  @Delete()
  remove(@Session() session: Record<string,any>,@Body('product') product:number) {
    if(session.user?.name){
      return this.wishlistService.remove(session.user.name,product);
    }
    throw new HttpException('no user conected', HttpStatus.NOT_FOUND)
  }
}
