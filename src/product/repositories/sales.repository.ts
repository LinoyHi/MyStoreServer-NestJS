import { EntityRepository, Repository } from "typeorm";
import { Sales } from "../entities/sales.entity";

@EntityRepository(Sales)
export class salesRepository extends Repository<Sales>{}