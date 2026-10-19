
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products = [
    {
      id: 1,
      name: 'Klawiatura',
      price: 199,
      image: 'keyboard.jpg',
      description: 'Klawiatura do codziennej pracy i gier.',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Mysz',
      price: 99,
      image: 'mouse.jpg',
      description: 'Wygodna mysz komputerowa.',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Monitor',
      price: 899,
      image: 'monitor.jpg',
      description: 'Monitor do nauki, pracy i rozrywki.',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Słuchawki',
      price: 149,
      image: 'headphones.jpg',
      description: 'Słuchawki do słuchania muzyki.',
      rating: 4.3
    }
  ];

  cart: any[] = [];

  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(
      item => item.product.id === product.id
    );

    if (existingProduct) {
      existingProduct.amount++;
    } else {
      this.cart.push({
        product: product,
        amount: 1
      });
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(
      item => item.product.id !== productId
    );
  }

  changeAmount(productId: number, change: number) {
    const item = this.cart.find(
      item => item.product.id === productId
    );

    if (!item) return;

    item.amount += change;

    if (item.amount <= 0) {
      this.removeFromCart(productId);
    }
  }

  getTotal() {
    return this.cart.reduce(
      (sum, item) => sum + item.product.price * item.amount,
      0
    );
  }
}

