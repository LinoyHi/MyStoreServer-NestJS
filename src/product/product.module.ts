import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './repositories/product.repository';
import { ProductDetailsRepository } from './repositories/productDet.repository';
import { ImgsRepository } from './repositories/imgs.repository';
import { KindComboRepository } from './repositories/kindCombo.repository';
import { CategoryRepository } from './repositories/category.repository';
import { CartRepository } from '../cart/cart.repository';
import { CartDetailsRepository } from '../cart/cartDetails.repository';
import { WishListRepository } from '../wishlist/wishlist.repository';
import { UserRepository } from '../users/user.repository';
import { ReviewRepository } from './repositories/review.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ProductRepository,ProductDetailsRepository,ImgsRepository,
    KindComboRepository,CategoryRepository,CartRepository,CartDetailsRepository,WishListRepository,UserRepository, ReviewRepository])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports:[ProductsService]
})
export class ProductModule {}
