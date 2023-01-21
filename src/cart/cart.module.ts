import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartRepository } from './cart.repository';
import { CartDetailsRepository } from './cartDetails.repository';
import { ProductModule } from '../product/product.module';
import { ProductDetails } from '../product/entities/productDetails.entity';

@Module({
  imports:[ProductModule,TypeOrmModule.forFeature([CartRepository, CartDetailsRepository,ProductDetails])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartsModule {}
