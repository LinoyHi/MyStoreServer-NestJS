import { Product } from "../../product/entities/product.entity";
import { User } from "../../users/entities/user.entity";
import { Entity, ManyToOne } from "typeorm";

@Entity()
export class Wishlist {
    @ManyToOne(()=>User,(user)=>user.wishlist,{primary:true})
    user:User

    @ManyToOne(()=>Product,(prod)=>prod.wishlists,{primary:true,nullable:false})
    product:Product
}
