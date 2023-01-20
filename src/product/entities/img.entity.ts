import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Img {
    @PrimaryColumn({
        primary:true,
        nullable: false,
        type: 'varchar',
        length: 200,
    })
    link:string//=src

    @Column({
        nullable: false,
        type: 'varchar',
        length: 80
    })
    description:string//=alt

    @ManyToOne(()=>Product,(product)=>product.imgs,{nullable:false})
    product:Product
}