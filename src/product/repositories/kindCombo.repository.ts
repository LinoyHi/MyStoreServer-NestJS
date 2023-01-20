import { EntityRepository, Repository } from "typeorm";
import { KindCombo } from "../entities/kindCombo.entity";

@EntityRepository(KindCombo)
export class KindComboRepository extends Repository<KindCombo>{}