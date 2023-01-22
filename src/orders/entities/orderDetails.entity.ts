import { ProductDetails } from "src/product/entities/productDetails.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class orderDetails{
    @ManyToOne(()=>Order,(ord)=>ord.details,{primary:true})
    @JoinColumn()
    id:Order

    @ManyToOne(()=>ProductDetails,(det)=>det.orders,{nullable:false, primary:true})
    @JoinColumn({name:'productId'})
    product:ProductDetails

    @Column()
    price:number

    @Column()
    quantity:number
}