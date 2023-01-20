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
exports.ProductDetails = void 0;
const typeorm_1 = require("typeorm");
const kindCombo_entity_1 = require("./kindCombo.entity");
const product_entity_1 = require("./product.entity");
const review_entity_1 = require("./review.entity");
let ProductDetails = class ProductDetails {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (prod) => prod.productDetails),
    __metadata("design:type", product_entity_1.Product)
], ProductDetails.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kindCombo_entity_1.KindCombo, (kind) => kind.productdetails),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", kindCombo_entity_1.KindCombo)
], ProductDetails.prototype, "kinds", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductDetails.prototype, "unitInStock", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (review) => review.product),
    __metadata("design:type", Array)
], ProductDetails.prototype, "reviews", void 0);
ProductDetails = __decorate([
    (0, typeorm_1.Entity)()
], ProductDetails);
exports.ProductDetails = ProductDetails;
//# sourceMappingURL=productDetails.entity.js.map