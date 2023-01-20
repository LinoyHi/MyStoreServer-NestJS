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
exports.Img = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
let Img = class Img {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        primary: true,
        nullable: false,
        type: 'varchar',
        length: 200,
    }),
    __metadata("design:type", String)
], Img.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'varchar',
        length: 80
    }),
    __metadata("design:type", String)
], Img.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.imgs, { nullable: false }),
    __metadata("design:type", product_entity_1.Product)
], Img.prototype, "product", void 0);
Img = __decorate([
    (0, typeorm_1.Entity)()
], Img);
exports.Img = Img;
//# sourceMappingURL=img.entity.js.map