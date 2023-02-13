import { User } from "src/users/entities/user.entity";
import { KindCombo } from "./kindCombo.entity";
import { Product } from "./product.entity";
export declare class Review {
    id: number;
    user: User;
    product: Product;
    kinds: KindCombo;
    reviewInput: string;
}
