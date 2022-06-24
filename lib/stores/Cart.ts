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
      resetCart: action,
      isEmpty: computed,
    });
  }

  addItem(product: Product, quantity: number) {
    const productInCart = this.items.find(
      (item) => item.item.id === product.id
    );

    productInCart
      ? (productInCart.quantity += quantity)
      : this.items.push({ item: product, quantity: quantity });

    this.total += product.price * quantity;
  }

  removeItem(product: Product) {
    const id = product.id;
    const productInCart = this.items.find(
      (item) => item.item.id === id
    );
    const productQuantityInCart = productInCart ? productInCart.quantity : 0;

    if (productQuantityInCart === 1) {
      this.items = this.items.filter((item) => item.item.id !== id);
    } else {
      productInCart!.quantity--;
    }
    this.total -= product.price;
  }

  resetCart() {
    this.items = [];
    this.total = 0;
  }

  get isEmpty() {
    return this.items.length === 0;
  }

}

const cart = new Cart();
export default cart;
