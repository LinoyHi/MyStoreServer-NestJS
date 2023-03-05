import { Injectable } from '@nestjs/common';
import { In, Not } from "typeorm";
import { ProductsService } from 'src/product/product.service';
import { ProductRepository } from 'src/product/repositories/product.repository';
import { ProductDetailsRepository } from 'src/product/repositories/productDet.repository';
import { CartRepository } from './cart.repository';
import { CartDetailsRepository } from './cartDetails.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CategoryRepository } from 'src/product/repositories/category.repository';
import { Product } from 'src/product/entities/product.entity';
import { WishListRepository } from 'src/wishlist/wishlist.repository';

@Injectable()
export class CartService {
  constructor(private cartRipo: CartRepository,
    private cartdetRipo: CartDetailsRepository,
    private productDetRipo: ProductDetailsRepository,
    private productRipo: ProductRepository,
    private categoryRipo: CategoryRepository,
    private productService: ProductsService,
    private wishRipo: WishListRepository,
  ) { }

  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart';
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  async findOneByUsername(username: string) {
    const cart = await this.cartRipo.findOneByUsername(username)
    const cartdeto = await this.cartdetRipo.find({
      where: { cartid: { id: cart.id } },
      relations: ['product']
    })
    let products = []
    for (const prod of cartdeto) {
      const prodDet = await this.productDetRipo.findOne({
        where: { id: prod.product.id },
        relations: ['kinds', 'product']
      })
      const item = await this.productService.findOne(prodDet.product.id, username)
      products.push({ product: JSON.parse(item), price: prod.price, quantity: prod.quantity, size: prodDet.kinds.size, color: prodDet.kinds.color, maxQuantity: prodDet.unitInStock, productid: prodDet.kinds.id, cartid: cart.id })
    }
    const wishlist = await this.wishRipo.find({
      select: ['product'],
      where: { user: {name: username} },
      relations: ['product']
    })
    const cartitems = { items: products, wishlist }
    return JSON.stringify(cartitems)
  }

  async findRecommendedForUsername(username: string) {
    const cart = await this.cartRipo.findOneByUsername(username)
    let recommend: Product[]
    const productsInCart = await this.cartdetRipo.find({
      where: { cartid: { id: cart.id } },
      relations: ['product', 'product.product', 'product.product.category']
    })
    const wishlist = await this.wishRipo.find({
      select: ['product'],
      where: { user: {name: username} },
      relations: ['product']
    })
    if (productsInCart[0]) {
      const productsIDs = []
      for (const cartDetProduct of productsInCart) {
        if (!productsIDs.includes(cartDetProduct.product.product.id)) {
          productsIDs.push(cartDetProduct.product.product.id)
        }
      }
      const amountOfCategories = await this.categoryRipo.count()
      const orderWay = productsInCart[0].product.product.category.id > amountOfCategories / 2 ? "DESC" : "ASC"
      recommend = await this.productRipo.find({
        where: { id: Not(In(productsIDs)) },
        order: { category: orderWay }
      })
    }
    else {
      recommend = await this.productRipo.find()
    }
    //note currently this gets any product who is not already in the cart and ordering by the category from the closer numbers to the farther it is not the best yet would be coming back to this soon.
    for (const item of recommend) {
      const amount = await this.productDetRipo.find({
        select: ['unitInStock'],
        where: { product: { id: item.id } }
      })
      let quantity = 0
      for (const am of amount) {
        quantity += am.unitInStock
      }
      item.inventory = quantity
    }
    return JSON.stringify({recommend,wishlist})
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  async remove(id: number, username: string) {
    const cart = await this.cartRipo.findOneByUsername(username)
    const cartItems = await this.cartdetRipo.find({
      where: { cartid: { id: cart?.id } },
      relations: ['product', 'cartid']
    })
    if (cartItems[0]) {
      for (const item of cartItems) {
        if (item.product.id === id) {
          this.cartdetRipo.delete(item)
        }
      }
      this.cartRipo.save(cart)
      return 'removed from cart';
    }
  }
}
