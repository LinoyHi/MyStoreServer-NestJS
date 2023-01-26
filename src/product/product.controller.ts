import { Controller, Get, Post, Body, Patch, Param, Delete, Session, HttpException, HttpStatus } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { User } from 'src/users/entities/user.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) { }

  @Post()
  create(@Body() { product }, //product:{
    // createProductDto: CreateProductDto, imgs: { link: string, description: string, product: Product | undefined }[],
    // kind: { color: string, size: string, quantity: number }[],
    // category: { name: string, parent: string }}
    @Session() session: Record<string, any>
  ) {
    if (session.user?.manager) {
      return this.productService.create(product.createProductDto, product.imgs, product.kind, product.category);
    }
    throw new HttpException('not allowed', HttpStatus.FORBIDDEN);
  }

  @Post('/:itemid')
  addtocart(@Param('itemid') id: string, @Session() session: Record<string, any>, @Body() { quantity }) {
    return this.productService.addToCart(+id, session.user, +quantity)
  }

  @Get()
  findAll(@Session() session: Record<string, any>) {
    return this.productService.findAll(undefined, session.user?.name);
  }

  @Get('/catagories/:name')
  async returnAllCatagories(@Param('name') userName:string) {
    return await this.productService.findAllCatagories()
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Session() session: Record<string, any>) {
    return this.productService.findOne(+id, session.user?.name);
  }

  @Get('/category/:categoryname')
  findCategory(@Param('categoryname') category: string, @Session() session: Record<string, any>) {
    return this.productService.findAll(category, session.user?.name)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
