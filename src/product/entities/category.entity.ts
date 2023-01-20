import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        nullable:false,
        type:'varchar',
        length:45
    })
    categoryName:string

    @ManyToOne(()=>Category,(cat)=>cat.child)
    parentcategory:Category

    @OneToMany(()=>Category,(cat)=>cat.parentcategory)
    child:Category[]

    @OneToMany(()=>Product,(prod)=>prod.category)
    products:Product[]
}