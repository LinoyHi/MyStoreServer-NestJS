import { Wishlist } from "src/wishlist/entities/wishlist.entity";
import { Category } from "./category.entity";
import { Img } from "./img.entity";
import { ProductDetails } from "./productDetails.entity";
import { Review } from "./review.entity";
import { Sales } from "./sales.entity";
export declare class Product {
    id: number;
    productName: string;
    mainImg: string;
    price: number;
    description: string;
    imgs: Img[];
    category: Category;
    productDetails: ProductDetails[];
    wishlists: Wishlist[];
    inventory: number;
    colors: string[];
    sizes: string[];
    prodDet: {
        color: string;
        size: string;
        quantity: number;
        id: number;
        sale: Sales;
    }[];
    wish: boolean;
    reviews: Review[];
}
