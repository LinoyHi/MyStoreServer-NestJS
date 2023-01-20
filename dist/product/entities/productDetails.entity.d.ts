import { KindCombo } from "./kindCombo.entity";
import { Product } from "./product.entity";
import { Review } from "./review.entity";
export declare class ProductDetails {
    id: number;
    product: Product;
    kinds: KindCombo;
    unitInStock: number;
    reviews: Review[];
}
