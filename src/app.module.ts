import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfig } from './config/typeORM.config';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(typeORMConfig), ProductModule, CartModule, WishlistModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
