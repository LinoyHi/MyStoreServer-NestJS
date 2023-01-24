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
exports.WishlistService = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../product/product.service");
const product_repository_1 = require("../product/repositories/product.repository");
const user_repository_1 = require("../users/user.repository");
const wishlist_repository_1 = require("./wishlist.repository");
let WishlistService = class WishlistService {
    constructor(wishRipo, userRipo, productRipo, productService) {
        this.wishRipo = wishRipo;
        this.userRipo = userRipo;
        this.productRipo = productRipo;
        this.productService = productService;
    }
    async create(createWishlistDto) {
        const user = await this.userRipo.findOne({ name: createWishlistDto.user });
        const product = await this.productRipo.findOne({ id: createWishlistDto.product });
        return this.wishRipo.save({ user, product });
    }
    findAll() {
        return `This action returns all wishlist`;
    }
    findOne(id) {
        return `This action returns a #${id} wishlist`;
    }
    update(id, updateWishlistDto) {
        return `This action updates a #${id} wishlist`;
    }
    async remove(user, id) {
        const wishlist = await this.wishRipo.find({ where: { user: { name: user } },
            relations: ['product']
        });
        for (const wish of wishlist) {
            if (wish.product.id === id) {
                this.wishRipo.delete(wish);
                return wish;
            }
        }
        throw new common_1.HttpException('couldn\'t delete', common_1.HttpStatus.NOT_FOUND);
    }
};
WishlistService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [wishlist_repository_1.WishListRepository,
        user_repository_1.UserRepository,
        product_repository_1.ProductRepository,
        product_service_1.ProductsService])
], WishlistService);
exports.WishlistService = WishlistService;
//# sourceMappingURL=wishlist.service.js.map