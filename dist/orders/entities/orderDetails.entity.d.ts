import { ProductDetails } from "src/product/entities/productDetails.entity";
import { Order } from "./order.entity";
export declare class orderDetails {
    id: Order;
    product: ProductDetails;
    price: number;
    quantity: number;
}
