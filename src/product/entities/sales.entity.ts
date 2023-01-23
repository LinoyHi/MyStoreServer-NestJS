import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductDetails } from "./productDetails.entity";

@Entity()
export class Sales{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        nullable:false,
        type:'varchar',
        length:600
    })
    mathAction: string
    
    @Column({
        nullable:false,
        type:'int'
    })
    amount: number
    
    @OneToMany(()=>ProductDetails,(det)=>det.sale)
    product:ProductDetails[]
}