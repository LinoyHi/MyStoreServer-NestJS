import { ProductsService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    create({ product }: {
        product: any;
    }, session: Record<string, any>): Promise<string>;
    addtocart(id: string, session: Record<string, any>, { quantity }: {
        quantity: any;
    }): Promise<string>;
    findAll(session: Record<string, any>): Promise<string>;
    returnAllCatagories(userName: string): Promise<import("./entities/category.entity").Category[]>;
    findOne(id: string, session: Record<string, any>): Promise<string>;
    findCategory(category: string, session: Record<string, any>): Promise<string>;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
