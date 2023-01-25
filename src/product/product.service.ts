import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CategoryRepository } from './repositories/category.repository';
import { ImgsRepository } from './repositories/imgs.repository';
import { KindComboRepository } from './repositories/kindCombo.repository';
import { ProductRepository } from './repositories/product.repository';
import { ProductDetailsRepository } from './repositories/productDet.repository';
import { UserRepository } from '../users/user.repository';
import { WishListRepository } from '../wishlist/wishlist.repository';
import { KindCombo } from './entities/kindCombo.entity';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(private productRipo: ProductRepository,
    private kindRipo: KindComboRepository,
    private imgRipo: ImgsRepository,
    private categoryRipo: CategoryRepository,
    private ProductDetRipo: ProductDetailsRepository,
    private userRipo: UserRepository,
    private wishRipo: WishListRepository,
  ) { }

  async create(createProductDto: CreateProductDto,
    imgs: { link: string, description: string, product: Product }[],
    kind: { color: string, size: string, quantity: number }[],
    category: { name: string, parent: string }) {
    let parentcategory = await this.categoryRipo.find({ categoryName: category.parent })
    let cat = await this.categoryRipo.find({ categoryName: category.name})
    if (!cat[0]) {
      let NewCategory: Category[]
      if (category.parent) {
        if (!parentcategory[0]) {
          parentcategory = this.categoryRipo.create([{ categoryName: category.parent }])
          this.categoryRipo.save(parentcategory[0])
        }
        NewCategory = this.categoryRipo.create([{ categoryName: category.name, parentcategory: parentcategory[0] }])
      }
      else {
        NewCategory = this.categoryRipo.create([{ categoryName: category.name }])
      }
      await this.categoryRipo.save(NewCategory[0])
      cat = NewCategory
    }
    createProductDto.category = cat[0]
    const item = this.productRipo.create([{ ...createProductDto }])
    await this.productRipo.save(item[0])
    for (const i of imgs) {
      i.product = item[0]
      this.imgRipo.save(i)
    }
    let kindDeta: KindCombo;
    let newkind: KindCombo[];
    for (const type of kind) {
      const kindof = await this.kindRipo.find({ color: type.color })
      if (kindof) {
        for (const k of kindof) {
          if (k.size === type.size) {
            kindDeta = k
            const det = this.ProductDetRipo.create([{ product: item[0], kinds: kindDeta, unitInStock: Number(type.quantity) }])
            this.ProductDetRipo.save(det[0])
          }
        }
        if (!kindDeta) {
          newkind = this.kindRipo.create([{ color: type.color, size: type.size }])
        }
      } else {
        newkind = this.kindRipo.create([{ color: type.color, size: type.size }])
      }
      if (newkind) {
        kindDeta = newkind[0]
        await this.kindRipo.save(newkind[0])
      }
      const det = this.ProductDetRipo.create([{ product: item[0], kinds: kindDeta, unitInStock: Number(type.quantity) }])
      this.ProductDetRipo.save(det[0])
      kindDeta = undefined
    }
    return 'This action added a new product';
  }

  async findAllCatagories() {
    const mainCaragories = await this.categoryRipo.find({ where: { parentcategory: null } })
    for (const i of mainCaragories) {
      i.child = await this.categoryRipo.find({ where: { parentcategory: i } })
    }
    return mainCaragories
  }

  async findAll(category: string | undefined, user: string | undefined) {
    let items
    if(category){
      const cat = await this.categoryRipo.find({categoryName:category})
      const secondCats= await this.categoryRipo.find({parentcategory:{id:cat[0].id}})
      items = await this.productRipo.find({
        where: { category: { categoryName: category } },
        relations: ['category']
      })
      for(const c of secondCats){
        items = [...items, ...await this.productRipo.find({
          where: { category: { categoryName: c.categoryName } },
          relations: ['category']
        })]
      }
    } 
    else {items = await this.productRipo.find()}
    let wishlist = [];
    if (user) {
      const customer = await this.userRipo.find({ name: user })
      const allwishlist = await this.wishRipo.find({
        where: { user: customer[0] },
        relations: ['product']
      })
      for (const wish of allwishlist) {
        wishlist.push(wish.product.id)
      }
    }
    for (const item of items) {
      if (wishlist.includes(item.id)) {
        item.wish = true
      }
      const amount = await this.ProductDetRipo.find({
        where: { product: { id: item.id } },
        select: ['unitInStock'],
        relations: ['product']
      })
      let sum = 0
      for (const a of amount) {
        sum += a.unitInStock
      }
      item.inventory = sum
    }
    return JSON.stringify(items)
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
