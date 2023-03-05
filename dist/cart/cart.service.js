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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const product_service_1 = require("../product/product.service");
const product_repository_1 = require("../product/repositories/product.repository");
const productDet_repository_1 = require("../product/repositories/productDet.repository");
const cart_repository_1 = require("./cart.repository");
const cartDetails_repository_1 = require("./cartDetails.repository");
const category_repository_1 = require("../product/repositories/category.repository");
const wishlist_repository_1 = require("../wishlist/wishlist.repository");
let CartService = class CartService {
    constructor(cartRipo, cartdetRipo, productDetRipo, productRipo, categoryRipo, productService, wishRipo) {
        this.cartRipo = cartRipo;
        this.cartdetRipo = cartdetRipo;
        this.productDetRipo = productDetRipo;
        this.productRipo = productRipo;
        this.categoryRipo = categoryRipo;
        this.productService = productService;
        this.wishRipo = wishRipo;
    }
    create(createCartDto) {
        return 'This action adds a new cart';
    }
    findAll() {
        return `This action returns all cart`;
    }
    findOne(id) {
        return `This action returns a #${id} cart`;
    }
    async findOneByUsername(username) {
        const cart = await this.cartRipo.findOneByUsername(username);
        const cartdeto = await this.cartdetRipo.find({
            where: { cartid: { id: cart.id } },
            relations: ['product']
        });
        let products = [];
        for (const prod of cartdeto) {
            const prodDet = await this.productDetRipo.findOne({
                where: { id: prod.product.id },
                relations: ['kinds', 'product']
            });
            const item = await this.productService.findOne(prodDet.product.id, username);
            products.push({ product: JSON.parse(item), price: prod.price, quantity: prod.quantity, size: prodDet.kinds.size, color: prodDet.kinds.color, maxQuantity: prodDet.unitInStock, productid: prodDet.kinds.id, cartid: cart.id });
        }
        const wishlist = await this.wishRipo.find({
            select: ['product'],
            where: { user: { name: username } },
            relations: ['product']
        });
        const cartitems = { items: products, wishlist };
        return JSON.stringify(cartitems);
    }
    async findRecommendedForUsername(username) {
        const cart = await this.cartRipo.findOneByUsername(username);
        let recommend;
        const productsInCart = await this.cartdetRipo.find({
            where: { cartid: { id: cart.id } },
            relations: ['product', 'product.product', 'product.product.category']
        });
        const wishlist = await this.wishRipo.find({
            select: ['product'],
            where: { user: { name: username } },
            relations: ['product']
        });
        if (productsInCart[0]) {
            const productsIDs = [];
            for (const cartDetProduct of productsInCart) {
                if (!productsIDs.includes(cartDetProduct.product.product.id)) {
                    productsIDs.push(cartDetProduct.product.product.id);
                }
            }
            const amountOfCategories = await this.categoryRipo.count();
            const orderWay = productsInCart[0].product.product.category.id > amountOfCategories / 2 ? "DESC" : "ASC";
            recommend = await this.productRipo.find({
                where: { id: (0, typeorm_1.Not)((0, typeorm_1.In)(productsIDs)) },
                order: { category: orderWay }
            });
        }
        else {
            recommend = await this.productRipo.find();
        }
        for (const item of recommend) {
            const amount = await this.productDetRipo.find({
                select: ['unitInStock'],
                where: { product: { id: item.id } }
            });
            let quantity = 0;
            for (const am of amount) {
                quantity += am.unitInStock;
            }
            item.inventory = quantity;
        }
        return JSON.stringify({ recommend, wishlist });
    }
    update(id, updateCartDto) {
        return `This action updates a #${id} cart`;
    }
    async remove(id, username) {
        const cart = await this.cartRipo.findOneByUsername(username);
        const cartItems = await this.cartdetRipo.find({
            where: { cartid: { id: cart === null || cart === void 0 ? void 0 : cart.id } },
            relations: ['product', 'cartid']
        });
        if (cartItems[0]) {
            for (const item of cartItems) {
                if (item.product.id === id) {
                    this.cartdetRipo.delete(item);
                }
            }
            this.cartRipo.save(cart);
            return 'removed from cart';
        }
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_repository_1.CartRepository,
        cartDetails_repository_1.CartDetailsRepository,
        productDet_repository_1.ProductDetailsRepository,
        product_repository_1.ProductRepository,
        category_repository_1.CategoryRepository,
        product_service_1.ProductsService,
        wishlist_repository_1.WishListRepository])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map