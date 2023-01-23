import { CartDetails } from "src/cart/entities/cartDetails.entity";
import { orderDetails } from "src/orders/entities/orderDetails.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { KindCombo } from "./kindCombo.entity";
import { Product } from "./product.entity";
import { Review } from "./review.entity";
import { Sales } from "./sales.entity";

@Entity()
export class ProductDetails{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>Product,(prod)=>prod.productDetails)
    product:Product

    @ManyToOne(()=>KindCombo,(kind)=>kind.productdetails)
    @JoinColumn()
    kinds:KindCombo

    @Column()
    unitInStock:number

    @ManyToOne(()=>Sales,(sales)=>sales.id)
    sale:Sales

    @OneToMany(()=>Review,(review)=>review.product)
    reviews: Review[]

    @OneToMany(()=>CartDetails,(cart)=>cart.product)
    carts:CartDetails[]

    @OneToMany(()=>orderDetails,(ord)=>ord.product)
    orders:CartDetails[]
}