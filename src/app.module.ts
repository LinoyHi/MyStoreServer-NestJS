import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { CartsModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { typeORMConfig } from './config/typeORM.config';
import { WishlistModule } from './wishlist/wishlist.module';
import { UserCheckMiddleware } from './userCheck.middleware';
import { ProductsController } from './product/product.controller';
import { WishlistController } from './wishlist/wishlist.controller';

@Module({
  imports: [OrdersModule, UsersModule, CartsModule, ProductModule, TypeOrmModule.forRoot(typeORMConfig), WishlistModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserCheckMiddleware)
      .exclude(
        { path: 'products', method: RequestMethod.GET },
        { path: 'products/(.*)', method: RequestMethod.GET },
      )
      .forRoutes(ProductsController,WishlistController);
  }
}
