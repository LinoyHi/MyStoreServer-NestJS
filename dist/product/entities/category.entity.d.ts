import { Product } from "./product.entity";
export declare class Category {
    id: number;
    categoryName: string;
    parentcategory: Category;
    child: Category[];
    products: Product[];
}
