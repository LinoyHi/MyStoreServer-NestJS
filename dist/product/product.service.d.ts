import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CategoryRepository } from './repositories/category.repository';
import { ImgsRepository } from './repositories/imgs.repository';
import { KindComboRepository } from './repositories/kindCombo.repository';
import { ProductRepository } from './repositories/product.repository';
import { ProductDetailsRepository } from './repositories/productDet.repository';
import { UserRepository } from '../users/user.repository';
import { WishListRepository } from '../wishlist/wishlist.repository';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';
import { CartDetailsRepository } from 'src/cart/cartDetails.repository';
import { CartRepository } from 'src/cart/cart.repository';
import { User } from 'src/users/entities/user.entity';
import { ReviewRepository } from './repositories/review.repository';
export declare class ProductsService {
    private productRipo;
    private kindRipo;
    private imgRipo;
    private categoryRipo;
    private ProductDetRipo;
    private userRipo;
    private wishRipo;
    private cartRipo;
    private cartDetRipo;
    private reviewRipo;
    constructor(productRipo: ProductRepository, kindRipo: KindComboRepository, imgRipo: ImgsRepository, categoryRipo: CategoryRepository, ProductDetRipo: ProductDetailsRepository, userRipo: UserRepository, wishRipo: WishListRepository, cartRipo: CartRepository, cartDetRipo: CartDetailsRepository, reviewRipo: ReviewRepository);
    create(createProductDto: CreateProductDto, imgs: {
        link: string;
        description: string;
        product: Product;
    }[], kind: {
        color: string;
        size: string;
        quantity: number;
    }[], category: {
        name: string;
        parent: string;
    }): Promise<string>;
    findAllCatagories(): Promise<Category[]>;
    findAll(category: string | undefined, user: string | undefined): Promise<string>;
    findOne(id: number, user: string | undefined): Promise<string>;
    addToCart(id: number, user: User, quantity: number): Promise<string>;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
