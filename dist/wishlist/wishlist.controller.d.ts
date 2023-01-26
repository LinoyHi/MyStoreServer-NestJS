import { WishlistService } from './wishlist.service';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { User } from 'src/users/entities/user.entity';
export declare class WishlistController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistService);
    create(newwishlistItem: {
        product: number;
        user: string;
    }, session: Record<string, any>): Promise<{
        user: User;
        product: import("../product/entities/product.entity").Product;
    } & import("./entities/wishlist.entity").Wishlist>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWishlistDto: UpdateWishlistDto): string;
    remove(session: Record<string, any>, product: number): Promise<import("./entities/wishlist.entity").Wishlist>;
}
