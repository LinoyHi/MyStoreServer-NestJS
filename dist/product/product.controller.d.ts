import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    create(product: {
        createProductDto: CreateProductDto;
        imgs: {
            link: string;
            description: string;
            product: Product | undefined;
        }[];
        kind: {
            color: string;
            size: string;
            quantity: number;
        }[];
        category: {
            name: string;
            parent: string;
        };
    }): Promise<string>;
    returnAllCatagories(): Promise<import("./entities/category.entity").Category[]>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
