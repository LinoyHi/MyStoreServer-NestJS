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
exports.Product = void 0;
const wishlist_entity_1 = require("../../wishlist/entities/wishlist.entity");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const img_entity_1 = require("./img.entity");
const productDetails_entity_1 = require("./productDetails.entity");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'varchar',
        length: 45
    }),
    __metadata("design:type", String)
], Product.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'varchar',
        length: 200
    }),
    __metadata("design:type", String)
], Product.prototype, "mainImg", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'unitPrice',
        nullable: false,
        type: 'int'
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'varchar',
        length: 600
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => img_entity_1.Img, (img) => img.product),
    __metadata("design:type", Array)
], Product.prototype, "imgs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (cat) => cat.products),
    __metadata("design:type", category_entity_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => productDetails_entity_1.ProductDetails, (det) => det.product),
    __metadata("design:type", Array)
], Product.prototype, "productDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => wishlist_entity_1.Wishlist, (wish) => wish.product),
    __metadata("design:type", Array)
], Product.prototype, "wishlists", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map