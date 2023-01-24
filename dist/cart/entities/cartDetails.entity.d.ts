import { ProductDetails } from "../../product/entities/productDetails.entity";
import { Cart } from "./cart.entity";
export declare class CartDetails {
    cartid: Cart;
    product: ProductDetails;
    price: number;
    quantity: number;
}
