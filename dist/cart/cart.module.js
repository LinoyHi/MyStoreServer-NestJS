"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsModule = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const cart_controller_1 = require("./cart.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cart_repository_1 = require("./cart.repository");
const cartDetails_repository_1 = require("./cartDetails.repository");
const product_module_1 = require("../product/product.module");
const productDetails_entity_1 = require("../product/entities/productDetails.entity");
const product_repository_1 = require("../product/repositories/product.repository");
const category_repository_1 = require("../product/repositories/category.repository");
const wishlist_repository_1 = require("../wishlist/wishlist.repository");
let CartsModule = class CartsModule {
};
CartsModule = __decorate([
    (0, common_1.Module)({
        imports: [product_module_1.ProductModule, typeorm_1.TypeOrmModule.forFeature([cart_repository_1.CartRepository, cartDetails_repository_1.CartDetailsRepository, productDetails_entity_1.ProductDetails, product_repository_1.ProductRepository, category_repository_1.CategoryRepository, wishlist_repository_1.WishListRepository])],
        controllers: [cart_controller_1.CartController],
        providers: [cart_service_1.CartService]
    })
], CartsModule);
exports.CartsModule = CartsModule;
//# sourceMappingURL=cart.module.js.map