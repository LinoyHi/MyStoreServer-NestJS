import { Repository } from "typeorm";
import { CartDetails } from "./entities/cartDetails.entity";
export declare class CartDetailsRepository extends Repository<CartDetails> {
    findByCartId(id: number): Promise<CartDetails>;
}
