import { User } from "../../users/entities/user.entity";
import { orderDetails } from "./orderDetails.entity";
export declare class Order {
    id: number;
    orderdate: Date;
    requireddate: Date;
    shippeddate: Date;
    details: orderDetails[];
    user: User;
    price: number;
}
