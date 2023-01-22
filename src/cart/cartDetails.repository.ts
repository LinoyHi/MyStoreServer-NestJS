import { EntityRepository, Repository } from "typeorm";
import { CartDetails } from "./entities/cartDetails.entity";

@EntityRepository(CartDetails)
export class CartDetailsRepository extends Repository<CartDetails>{
    findByCartId(id:number){
        return this.findOne({cartid:{id:id}})
    }
}