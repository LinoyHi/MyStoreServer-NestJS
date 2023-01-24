import { CartDetails } from "src/cart/entities/cartDetails.entity";
import { KindCombo } from "./kindCombo.entity";
import { Product } from "./product.entity";
import { Review } from "./review.entity";
import { Sales } from "./sales.entity";
export declare class ProductDetails {
    id: number;
    product: Product;
    kinds: KindCombo;
    unitInStock: number;
    sale: Sales;
    reviews: Review[];
    carts: CartDetails[];
    orders: CartDetails[];
}
