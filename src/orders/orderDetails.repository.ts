import { EntityRepository, Repository } from "typeorm";
import { orderDetails } from "./entities/orderDetails.entity";

@EntityRepository(orderDetails)
export class orderDetailsRepository extends Repository<orderDetails>{
    
}