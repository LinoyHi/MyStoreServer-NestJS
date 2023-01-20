import { Category } from "../entities/category.entity";
export declare class CreateProductDto {
    id: number;
    productName: string;
    price: number;
    description: string;
    mainImg: string;
    category: Category;
}
