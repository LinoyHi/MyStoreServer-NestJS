import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CategoryRepository } from './repositories/category.repository';
import { ImgsRepository } from './repositories/imgs.repository';
import { KindComboRepository } from './repositories/kindCombo.repository';
import { ProductRepository } from './repositories/product.repository';
import { ProductDetailsRepository } from './repositories/productDet.repository';
import { UserRepository } from '../users/user.repository';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';
export declare class ProductsService {
    private productRipo;
    private kindRipo;
    private imgRipo;
    private categoryRipo;
    private ProductDetRipo;
    private userRipo;
    constructor(productRipo: ProductRepository, kindRipo: KindComboRepository, imgRipo: ImgsRepository, categoryRipo: CategoryRepository, ProductDetRipo: ProductDetailsRepository, userRipo: UserRepository);
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
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
