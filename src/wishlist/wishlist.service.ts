import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductsService } from '../product/product.service';
import { ProductRepository } from '../product/repositories/product.repository';
import { UserRepository } from '../users/user.repository';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { WishListRepository } from './wishlist.repository';

@Injectable()
export class WishlistService {
  constructor(private wishRipo:WishListRepository,
              private userRipo: UserRepository,
              private productRipo: ProductRepository,
              private productService:ProductsService
    ){}

  async create(createWishlistDto: {user:string, product:number}) {
    const user= await this.userRipo.findOne({name:createWishlistDto.user})
    const product = await this.productRipo.findOne({id:createWishlistDto.product})
    return this.wishRipo.save({user,product});
  }

  findAll() {
    return `This action returns all wishlist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wishlist`;
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return `This action updates a #${id} wishlist`;
  }

  async remove(user:string,id:number) {
    const wishlist = await this.wishRipo.find({where:{user:{name:user}},
      relations:['product']
    })
    for(const wish of wishlist){
      if (wish.product.id===id){
        this.wishRipo.delete(wish)
        return wish
      }
    }
    throw new HttpException('couldn\'t delete', HttpStatus.NOT_FOUND);
  }
}
