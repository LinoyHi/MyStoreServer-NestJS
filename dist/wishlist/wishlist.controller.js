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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistController = void 0;
const common_1 = require("@nestjs/common");
const wishlist_service_1 = require("./wishlist.service");
const update_wishlist_dto_1 = require("./dto/update-wishlist.dto");
let WishlistController = class WishlistController {
    constructor(wishlistService) {
        this.wishlistService = wishlistService;
    }
    create(newwishlistItem, session) {
        var _a;
        newwishlistItem.user = (_a = session.user) === null || _a === void 0 ? void 0 : _a.name;
        if (newwishlistItem.user) {
            return this.wishlistService.create(newwishlistItem);
        }
        throw new common_1.HttpException('no user conected', common_1.HttpStatus.NOT_FOUND);
    }
    findAll() {
        return this.wishlistService.findAll();
    }
    findOne(id) {
        return this.wishlistService.findOne(+id);
    }
    update(id, updateWishlistDto) {
        return this.wishlistService.update(+id, updateWishlistDto);
    }
    remove(session, product) {
        var _a;
        if ((_a = session.user) === null || _a === void 0 ? void 0 : _a.name) {
            return this.wishlistService.remove(session.user.name, product);
        }
        throw new common_1.HttpException('no user conected', common_1.HttpStatus.NOT_FOUND);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wishlist_dto_1.UpdateWishlistDto]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)('product')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "remove", null);
WishlistController = __decorate([
    (0, common_1.Controller)('wishlist'),
    __metadata("design:paramtypes", [wishlist_service_1.WishlistService])
], WishlistController);
exports.WishlistController = WishlistController;
//# sourceMappingURL=wishlist.controller.js.map