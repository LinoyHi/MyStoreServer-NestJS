"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistService = void 0;
const common_1 = require("@nestjs/common");
let WishlistService = class WishlistService {
    create(createWishlistDto) {
        return 'This action adds a new wishlist';
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
    remove(id) {
        return `This action removes a #${id} wishlist`;
    }
};
WishlistService = __decorate([
    (0, common_1.Injectable)()
], WishlistService);
exports.WishlistService = WishlistService;
//# sourceMappingURL=wishlist.service.js.map