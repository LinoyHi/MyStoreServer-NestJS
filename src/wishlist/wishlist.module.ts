import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishListRepository } from './wishlist.repository';
import { ProductRepository } from '../product/repositories/product.repository';
import { UserRepository } from '../users/user.repository';
import { ProductModule } from '../product/product.module';

@Module({
  imports:[ProductModule,TypeOrmModule.forFeature([WishListRepository,ProductRepository,UserRepository])],
  controllers: [WishlistController],
  providers: [WishlistService]
})
export class WishlistModule {}
