import { KindCombo } from "./kindCombo.entity";
import { Product } from "./product.entity";
export declare class Review {
    id: number;
    product: Product;
    kinds: KindCombo;
    reviewInput: string;
}
