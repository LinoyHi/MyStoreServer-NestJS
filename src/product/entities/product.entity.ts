import { Wishlist } from "src/wishlist/entities/wishlist.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";
import { Img } from "./img.entity";
import { ProductDetails } from "./productDetails.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        nullable:false,
        type:'varchar',
        length:45
    })
    productName:string

    @Column({
        primary:true,
        nullable: false,
        type: 'varchar',
        length: 200,
        default:null
    })
    mainImg:string

    @Column({
        name:'unitPrice',
        nullable:false,
        type:'int'
    })
    price:number

    @Column({
        nullable:false,
        type:'varchar',
        length:600
    })
    description:string

    @OneToMany(()=>Img,(img)=>img.product)
    imgs:Img[]

    @ManyToOne(()=>Category,(cat)=>cat.products)
    category:Category

    @OneToMany(()=>ProductDetails,(det)=>det.product)
    productDetails:ProductDetails[]

    @OneToMany(()=>Wishlist,(wish)=>wish.product)
    wishlists:Wishlist[]

    inventory:number

    colors:string[]

    sizes:string[]

    prodDet:{color:string,size:string,quantity:number,id:number}[]

    wish:boolean
}
