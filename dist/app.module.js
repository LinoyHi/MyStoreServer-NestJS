"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const orders_module_1 = require("./orders/orders.module");
const users_module_1 = require("./users/users.module");
const cart_module_1 = require("./cart/cart.module");
const product_module_1 = require("./product/product.module");
const typeORM_config_1 = require("./config/typeORM.config");
const wishlist_module_1 = require("./wishlist/wishlist.module");
const userCheck_middleware_1 = require("./userCheck.middleware");
const product_controller_1 = require("./product/product.controller");
const wishlist_controller_1 = require("./wishlist/wishlist.controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(userCheck_middleware_1.UserCheckMiddleware)
            .exclude({ path: 'products', method: common_1.RequestMethod.GET }, { path: 'products/(.*)', method: common_1.RequestMethod.GET })
            .forRoutes(product_controller_1.ProductsController, wishlist_controller_1.WishlistController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [orders_module_1.OrdersModule, users_module_1.UsersModule, cart_module_1.CartsModule, product_module_1.ProductModule, typeorm_1.TypeOrmModule.forRoot(typeORM_config_1.typeORMConfig), wishlist_module_1.WishlistModule,],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map