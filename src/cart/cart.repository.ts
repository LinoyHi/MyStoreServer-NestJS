import { EntityRepository, Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart>{

    findOneByUsername(name:string){
        return this.findOne({
            where:[{username:{name}}], 
            relations:['username']
        })
    }
}