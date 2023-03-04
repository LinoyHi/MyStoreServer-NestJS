import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
export declare class CartRepository extends Repository<Cart> {
    findOneByUsername(name: string): Promise<Cart>;
}
