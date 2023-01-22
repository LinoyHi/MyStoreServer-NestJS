import { Product } from "../../product/entities/product.entity"
import { User } from "../../users/entities/user.entity"

export class CreateWishlistDto {
    user:User

    product:Product
}
