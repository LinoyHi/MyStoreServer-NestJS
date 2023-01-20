import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { KindCombo } from "./kindCombo.entity";
import { Product } from "./product.entity";

@Entity()
export class Review{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>Product,(prod)=>prod.productDetails)
    product:Product

    @ManyToOne(()=>KindCombo,(kind)=>kind.productdetails)
    @JoinColumn()
    kinds:KindCombo

    @Column({
        nullable:false,
        type:'varchar',
        length:600
    })
    reviewInput: string
}