import {
    Column,
    Entity,
    OneToMany,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import { Wishlist } from 'src/wishlist/entities/wishlist.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Review } from 'src/product/entities/review.entity';

@Entity()
export class User {
    @Column({
        name: 'userName',
        nullable: false,
        type: 'varchar',
        length: 30,
        default: '',
        primary:true,
    })
    name:string

    @Column({
        name: 'hashpassword',
        nullable: false,
        type: 'varchar',
        default: '',
    })
    password: string;

    @Column({
        nullable: false,
        type: 'varchar',
        default: '',
    })
    firstName: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 30,
        default: '',
    })
    lastName: string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 30,
        default: '',
    })
    @IsEmail()
    email: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 30,
        default: '',
    })
    address: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 45,
        default: '',
    })
    city: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 45,
        default: '',
    })
    country: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 20,
        default: '',
    })
    phone: string;

    @Column({
        nullable:true,
        type: Boolean,
        default:false
    })
    manager:Boolean;

    
    @Column({
        nullable: true,
        type: 'varchar',
        length: 20,
        default: '',
    })
    gender:string

    @Column({
        nullable:true, 
        type:Date,
        default: null,
    })
    birthday:Date

    @OneToMany(() => Wishlist, (wish) => wish.user)
    wishlist: Wishlist[];

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];

    @OneToMany(()=>Review,(review)=>review.user)
    reviews:Review[]
}
