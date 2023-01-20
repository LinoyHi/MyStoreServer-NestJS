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
let ProductsService = class ProductsService {
    constructor(productRipo, kindRipo, imgRipo, categoryRipo, ProductDetRipo, userRipo) {
        this.productRipo = productRipo;
        this.kindRipo = kindRipo;
        this.imgRipo = imgRipo;
        this.categoryRipo = categoryRipo;
        this.ProductDetRipo = ProductDetRipo;
        this.userRipo = userRipo;
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
    findAll() {
        return `This action returns all product`;
    }
    findOne(id) {
        return `This action returns a #${id} product`;
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
        user_repository_1.UserRepository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=product.service.js.map