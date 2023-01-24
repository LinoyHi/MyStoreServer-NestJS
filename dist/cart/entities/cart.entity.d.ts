import { User } from "../../users/entities/user.entity";
import { CartDetails } from "./cartDetails.entity";
export declare class Cart {
    id: number;
    username: User;
    price: number;
    quantity: number;
    details: CartDetails[];
}
