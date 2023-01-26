import { User } from 'src/users/entities/user.entity';
import { ProductsService } from '../product/product.service';
import { ProductRepository } from '../product/repositories/product.repository';
import { UserRepository } from '../users/user.repository';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { WishListRepository } from './wishlist.repository';
export declare class WishlistService {
    private wishRipo;
    private userRipo;
    private productRipo;
    private productService;
    constructor(wishRipo: WishListRepository, userRipo: UserRepository, productRipo: ProductRepository, productService: ProductsService);
    create(createWishlistDto: {
        user: string;
        product: number;
    }): Promise<{
        user: User;
        product: import("../product/entities/product.entity").Product;
    } & import("./entities/wishlist.entity").Wishlist>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWishlistDto: UpdateWishlistDto): string;
    remove(user: string, id: number): Promise<import("./entities/wishlist.entity").Wishlist>;
}
