import { ProductsService } from 'src/product/product.service';
import { ProductRepository } from 'src/product/repositories/product.repository';
import { ProductDetailsRepository } from 'src/product/repositories/productDet.repository';
import { CartRepository } from './cart.repository';
import { CartDetailsRepository } from './cartDetails.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CategoryRepository } from 'src/product/repositories/category.repository';
import { WishListRepository } from 'src/wishlist/wishlist.repository';
export declare class CartService {
    private cartRipo;
    private cartdetRipo;
    private productDetRipo;
    private productRipo;
    private categoryRipo;
    private productService;
    private wishRipo;
    constructor(cartRipo: CartRepository, cartdetRipo: CartDetailsRepository, productDetRipo: ProductDetailsRepository, productRipo: ProductRepository, categoryRipo: CategoryRepository, productService: ProductsService, wishRipo: WishListRepository);
    create(createCartDto: CreateCartDto): string;
    findAll(): string;
    findOne(id: number): string;
    findOneByUsername(username: string): Promise<string>;
    findRecommendedForUsername(username: string): Promise<string>;
    update(id: number, updateCartDto: UpdateCartDto): string;
    remove(id: number, username: string): Promise<string>;
}
