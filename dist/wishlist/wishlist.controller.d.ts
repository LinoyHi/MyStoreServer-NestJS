import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
export declare class WishlistController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistService);
    create(createWishlistDto: CreateWishlistDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWishlistDto: UpdateWishlistDto): string;
    remove(id: string): string;
}
