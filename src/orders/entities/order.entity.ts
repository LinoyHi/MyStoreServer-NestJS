import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { orderDetails } from "./orderDetails.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true,
        type: 'date',
    })
    orderdate: Date;

    @Column({
        nullable: true,
        type: 'date',
    })
    requireddate: Date;

    @Column({
        nullable: true,
        type: 'date',
    })
    shippeddate: Date;

    @OneToMany(()=>orderDetails,(ordDet)=>ordDet.id)
    details:orderDetails[];

    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({name:'userName'})
    user: User;
    
    @Column()
    price: number;
}
