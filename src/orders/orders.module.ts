import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';
import { UsersModule } from '../users/users.module';
import { CartRepository } from '../cart/cart.repository';
import { CartDetailsRepository } from '../cart/cartDetails.repository';
import { orderDetailsRepository } from './orderDetails.repository';
import { ProductDetailsRepository } from '../product/repositories/productDet.repository';
import { ImgsRepository } from '../product/repositories/imgs.repository';

@Module({
  imports:[UsersModule,TypeOrmModule.forFeature([OrdersRepository,ImgsRepository,orderDetailsRepository,CartRepository,CartDetailsRepository,ProductDetailsRepository])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
