"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_controller_1 = require("./product.controller");
const typeorm_1 = require("@nestjs/typeorm");
const product_repository_1 = require("./repositories/product.repository");
const productDet_repository_1 = require("./repositories/productDet.repository");
const imgs_repository_1 = require("./repositories/imgs.repository");
const kindCombo_repository_1 = require("./repositories/kindCombo.repository");
const category_repository_1 = require("./repositories/category.repository");
const cart_repository_1 = require("../cart/cart.repository");
const cartDetails_repository_1 = require("../cart/cartDetails.repository");
const wishlist_repository_1 = require("../wishlist/wishlist.repository");
const user_repository_1 = require("../users/user.repository");
const review_repository_1 = require("./repositories/review.repository");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_repository_1.ProductRepository, productDet_repository_1.ProductDetailsRepository, imgs_repository_1.ImgsRepository,
                kindCombo_repository_1.KindComboRepository, category_repository_1.CategoryRepository, cart_repository_1.CartRepository, cartDetails_repository_1.CartDetailsRepository, wishlist_repository_1.WishListRepository, user_repository_1.UserRepository, review_repository_1.ReviewRepository])],
        controllers: [product_controller_1.ProductsController],
        providers: [product_service_1.ProductsService],
        exports: [product_service_1.ProductsService]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map