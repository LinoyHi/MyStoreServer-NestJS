import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController  {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  create(@Body() product:{createProductDto: CreateProductDto, imgs:{link:string,description:string,product:Product|undefined}[],
                          kind:{color:string,size:string,quantity:number}[],
                          category:{name:string, parent:string }}) {
    return this.productService.create(product.createProductDto, product.imgs, product.kind, product.category);
  }

  @Get('/catagories')
  async returnAllCatagories() {
    return await this.productService.findAllCatagories()
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
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
