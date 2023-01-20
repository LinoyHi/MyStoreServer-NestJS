"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KindCombo = void 0;
const typeorm_1 = require("typeorm");
const productDetails_entity_1 = require("./productDetails.entity");
let KindCombo = class KindCombo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], KindCombo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'varchar',
        length: 10
    }),
    __metadata("design:type", String)
], KindCombo.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'varchar',
        length: 20
    }),
    __metadata("design:type", String)
], KindCombo.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => productDetails_entity_1.ProductDetails, (det) => det.kinds),
    __metadata("design:type", Array)
], KindCombo.prototype, "productdetails", void 0);
KindCombo = __decorate([
    (0, typeorm_1.Entity)()
], KindCombo);
exports.KindCombo = KindCombo;
//# sourceMappingURL=kindCombo.entity.js.map