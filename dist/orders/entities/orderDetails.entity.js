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
exports.orderDetails = void 0;
const productDetails_entity_1 = require("../../product/entities/productDetails.entity");
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
let orderDetails = class orderDetails {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, (ord) => ord.details, { primary: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", order_entity_1.Order)
], orderDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => productDetails_entity_1.ProductDetails, (det) => det.orders, { nullable: false, primary: true }),
    (0, typeorm_1.JoinColumn)({ name: 'productId' }),
    __metadata("design:type", productDetails_entity_1.ProductDetails)
], orderDetails.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], orderDetails.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], orderDetails.prototype, "quantity", void 0);
orderDetails = __decorate([
    (0, typeorm_1.Entity)()
], orderDetails);
exports.orderDetails = orderDetails;
//# sourceMappingURL=orderDetails.entity.js.map