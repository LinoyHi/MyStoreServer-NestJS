import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartDetails } from "./cartDetails.entity";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id:number 

    @OneToOne(()=>User,(user)=>user.cart)
    @JoinColumn()
    username:User

    @OneToMany(()=>CartDetails,(det)=>det.cartid)
    details:CartDetails[]
}
