import { action, computed, makeObservable, observable } from "mobx";
import { Product } from "../types";

class Cart {
  items: { item: Product; quantity: number }[] = [];
  total: number = 0;

  constructor() {
    makeObservable(this, {
      items: observable,
      addItem: action,
      removeItem: action,
      // totalPrice: computed,
      // allItems: computed,
    });
  }

  addItem(product: Product, quantity: number) {
    const productInCart = this.items.find(
      (item) => item.item.id === product.id
    );

    productInCart
      ? productInCart.quantity += quantity
      : this.items.push({ item: product, quantity: 1 });

    this.total += (product.price * quantity);
  }

  removeItem(product: Product) {
    const id = product.id;
    this.items = this.items.filter((item) => item.item.id !== id);
    this.total -= product.price;
  }

  // totalPrice() {
  //   return this.items.reduce((total, item) => total + item.price, 0);
  // }

  // allItems() {
  //   return this.items;
  // }
}

const cart = new Cart();
export default cart;
