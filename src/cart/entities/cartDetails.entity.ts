import { ProductDetails } from "../../product/entities/productDetails.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Cart } from "./cart.entity";

@Entity()
export class CartDetails{
    @ManyToOne(()=>Cart,(cart)=>cart.details,{primary:true})
    @JoinColumn({name:'cartId'})
    cartid:Cart

    @ManyToOne(()=>ProductDetails,(det)=>det.carts,{nullable:false, primary:true})
    @JoinColumn({name:'productId'})
    product:ProductDetails

    @Column()
    price:number

    @Column()
    quantity:number
}