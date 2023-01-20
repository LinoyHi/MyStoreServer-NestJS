import { EntityRepository, Repository } from "typeorm";
import { ProductDetails } from "../entities/productDetails.entity";

@EntityRepository(ProductDetails)
export class ProductDetailsRepository extends Repository<ProductDetails>{}