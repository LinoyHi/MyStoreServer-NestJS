import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductDetails } from "./productDetails.entity";

@Entity()
export class KindCombo{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        nullable:false,
        type:'varchar',
        length:10
    })
    size:string

    @Column({
        nullable:false,
        type:'varchar',
        length:20
    })
    color:string

    @OneToMany(()=>ProductDetails,(det)=>det.kinds)
    productdetails:ProductDetails[]
}