"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const orders_controller_1 = require("./orders.controller");
const typeorm_1 = require("@nestjs/typeorm");
const orders_repository_1 = require("./orders.repository");
const users_module_1 = require("../users/users.module");
const cart_repository_1 = require("../cart/cart.repository");
const cartDetails_repository_1 = require("../cart/cartDetails.repository");
const orderDetails_repository_1 = require("./orderDetails.repository");
const productDet_repository_1 = require("../product/repositories/productDet.repository");
const imgs_repository_1 = require("../product/repositories/imgs.repository");
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, typeorm_1.TypeOrmModule.forFeature([orders_repository_1.OrdersRepository, imgs_repository_1.ImgsRepository, orderDetails_repository_1.orderDetailsRepository, cart_repository_1.CartRepository, cartDetails_repository_1.CartDetailsRepository, productDet_repository_1.ProductDetailsRepository])],
        controllers: [orders_controller_1.OrdersController],
        providers: [orders_service_1.OrdersService]
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map