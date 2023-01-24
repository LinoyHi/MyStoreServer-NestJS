import { Wishlist } from 'src/wishlist/entities/wishlist.entity';
import { Order } from 'src/orders/entities/order.entity';
export declare class User {
    name: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    country: string;
    phone: string;
    manager: Boolean;
    gender: string;
    birthday: Date;
    wishlist: Wishlist[];
    orders: Order[];
}
