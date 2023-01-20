import { Category } from "./category.entity";
import { Img } from "./img.entity";
import { ProductDetails } from "./productDetails.entity";
export declare class Product {
    id: number;
    productName: string;
    mainImg: string;
    price: number;
    description: string;
    imgs: Img[];
    category: Category;
    productDetails: ProductDetails[];
    inventory: number;
    colors: string[];
    sizes: string[];
    prodDet: {
        color: string;
        size: string;
        quantity: number;
        id: number;
    }[];
    wish: boolean;
}
