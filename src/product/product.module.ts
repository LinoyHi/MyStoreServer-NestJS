import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './repositories/product.repository';
import { ProductDetailsRepository } from './repositories/productDet.repository';
import { ImgsRepository } from './repositories/imgs.repository';
import { KindComboRepository } from './repositories/kindCombo.repository';
import { CategoryRepository } from './repositories/category.repository';
import { UserRepository } from '../users/user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ProductRepository,ProductDetailsRepository,ImgsRepository,
    KindComboRepository,CategoryRepository,UserRepository])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports:[ProductsService]
})
export class ProductModule {}
