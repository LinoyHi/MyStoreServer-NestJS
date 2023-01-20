import { EntityRepository, Repository } from "typeorm";
import { Img } from "../entities/img.entity";

@EntityRepository(Img)
export class ImgsRepository extends Repository<Img>{}