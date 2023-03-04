import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): string;
    findAll(): string;
    findOne(username: string, session: Record<string, any>): Promise<string>;
    findRecs(username: string, session: Record<string, any>): Promise<string>;
    update(id: string, updateCartDto: UpdateCartDto): string;
    remove(id: string, session: Record<string, any>): Promise<string>;
}
