import { EntityRepository, Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart>{

    findOneByUsername(username:string){
        return this.findOne({username:{name:username}})
    }
}