import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartDetails } from "./cartDetails.entity";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id:number 

    @OneToOne(()=>User)
    @JoinColumn({name:'userName'})
    username:User

    @Column()
    price:number

    @Column()
    quantity:number

    @OneToMany(()=>CartDetails,(det)=>det.cartid)
    details:CartDetails[]
}
