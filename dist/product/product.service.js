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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("./repositories/category.repository");
const imgs_repository_1 = require("./repositories/imgs.repository");
const kindCombo_repository_1 = require("./repositories/kindCombo.repository");
const product_repository_1 = require("./repositories/product.repository");
const productDet_repository_1 = require("./repositories/productDet.repository");
const user_repository_1 = require("../users/user.repository");
const wishlist_repository_1 = require("../wishlist/wishlist.repository");
let ProductsService = class ProductsService {
    constructor(productRipo, kindRipo, imgRipo, categoryRipo, ProductDetRipo, userRipo, wishRipo) {
        this.productRipo = productRipo;
        this.kindRipo = kindRipo;
        this.imgRipo = imgRipo;
        this.categoryRipo = categoryRipo;
        this.ProductDetRipo = ProductDetRipo;
        this.userRipo = userRipo;
        this.wishRipo = wishRipo;
    }
    async create(createProductDto, imgs, kind, category) {
        let parentcategory = await this.categoryRipo.find({ categoryName: category.parent });
        let cat = await this.categoryRipo.find({ categoryName: category.name });
        if (!cat[0]) {
            let NewCategory;
            if (category.parent) {
                if (!parentcategory[0]) {
                    parentcategory = this.categoryRipo.create([{ categoryName: category.parent }]);
                    this.categoryRipo.save(parentcategory[0]);
                }
                NewCategory = this.categoryRipo.create([{ categoryName: category.name, parentcategory: parentcategory[0] }]);
            }
            else {
                NewCategory = this.categoryRipo.create([{ categoryName: category.name }]);
            }
            await this.categoryRipo.save(NewCategory[0]);
            cat = NewCategory;
        }
        createProductDto.category = cat[0];
        const item = this.productRipo.create([Object.assign({}, createProductDto)]);
        await this.productRipo.save(item[0]);
        for (const i of imgs) {
            i.product = item[0];
            this.imgRipo.save(i);
        }
        let kindDeta;
        let newkind;
        for (const type of kind) {
            const kindof = await this.kindRipo.find({ color: type.color });
            if (kindof) {
                for (const k of kindof) {
                    if (k.size === type.size) {
                        kindDeta = k;
                        const det = this.ProductDetRipo.create([{ product: item[0], kinds: kindDeta, unitInStock: Number(type.quantity) }]);
                        this.ProductDetRipo.save(det[0]);
                    }
                }
                if (!kindDeta) {
                    newkind = this.kindRipo.create([{ color: type.color, size: type.size }]);
                }
            }
            else {
                newkind = this.kindRipo.create([{ color: type.color, size: type.size }]);
            }
            if (newkind) {
                kindDeta = newkind[0];
                await this.kindRipo.save(newkind[0]);
            }
            const det = this.ProductDetRipo.create([{ product: item[0], kinds: kindDeta, unitInStock: Number(type.quantity) }]);
            this.ProductDetRipo.save(det[0]);
            kindDeta = undefined;
        }
        return 'This action added a new product';
    }
    async findAllCatagories() {
        const mainCaragories = await this.categoryRipo.find({ where: { parentcategory: null } });
        for (const i of mainCaragories) {
            i.child = await this.categoryRipo.find({ where: { parentcategory: i } });
        }
        return mainCaragories;
    }
    async findAll(category, user) {
        let items;
        if (category) {
            const cat = await this.categoryRipo.find({ categoryName: category });
            const secondCats = await this.categoryRipo.find({ parentcategory: { id: cat[0].id } });
            items = await this.productRipo.find({
                where: { category: { categoryName: category } },
                relations: ['category']
            });
            for (const c of secondCats) {
                items = [...items, ...await this.productRipo.find({
                        where: { category: { categoryName: c.categoryName } },
                        relations: ['category']
                    })];
            }
        }
        else {
            items = await this.productRipo.find();
        }
        let wishlist = [];
        if (user) {
            const customer = await this.userRipo.find({ name: user });
            const allwishlist = await this.wishRipo.find({
                where: { user: customer[0] },
                relations: ['product']
            });
            for (const wish of allwishlist) {
                wishlist.push(wish.product.id);
            }
        }
        for (const item of items) {
            if (wishlist.includes(item.id)) {
                item.wish = true;
            }
            const amount = await this.ProductDetRipo.find({
                where: { product: { id: item.id } },
                select: ['unitInStock'],
                relations: ['product']
            });
            let sum = 0;
            for (const a of amount) {
                sum += a.unitInStock;
            }
            item.inventory = sum;
        }
        return JSON.stringify(items);
    }
    async findOne(id, user) {
        let wishlist = [];
        if (user) {
            const customer = await this.userRipo.find({ name: user });
            const allwishlist = await this.wishRipo.find({
                where: { user: customer[0] },
                relations: ['product']
            });
            for (const wish of allwishlist) {
                wishlist.push(wish.product.id);
            }
        }
        const items = await this.productRipo.find({ id });
        const item = items[0];
        const imgs = await this.imgRipo.find({
            where: { product: { id: item.id } },
            relations: ['product']
        });
        item.imgs = imgs;
        const det = await this.ProductDetRipo.find({
            select: ['kinds', 'id', 'unitInStock'],
            where: { product: { id: item.id } },
            relations: ['kinds', 'product'],
        });
        let sum = 0;
        let colors = [];
        let sizes = [];
        item.prodDet = [];
        for (const a of det) {
            sum += a.unitInStock;
            const color = a.kinds.color;
            const size = a.kinds.size;
            if (!colors.includes(color)) {
                colors.push(color);
            }
            if (!sizes.includes(size)) {
                sizes.push(size);
            }
            item.prodDet.push({ color, size, quantity: a.unitInStock, id: a.kinds.id });
        }
        item.colors = colors;
        item.sizes = sizes;
        item.inventory = sum;
        if (wishlist.includes(item.id)) {
            item.wish = true;
        }
        return JSON.stringify(item);
    }
    update(id, updateProductDto) {
        return `This action updates a #${id} product`;
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        kindCombo_repository_1.KindComboRepository,
        imgs_repository_1.ImgsRepository,
        category_repository_1.CategoryRepository,
        productDet_repository_1.ProductDetailsRepository,
        user_repository_1.UserRepository,
        wishlist_repository_1.WishListRepository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=product.service.js.map