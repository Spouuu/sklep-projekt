import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';

@Component({
  imports: [RouterOutlet, RouterLink, Home, Cart],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  cartProducts: any[] = [];

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

  addProductsToCard(product: any) {
    const existingProduct = this.cartProducts.find(
      item => item.product.id === product.id
    );

    if (existingProduct) {
      this.cartProducts = this.cartProducts.map(item =>
        item.product.id === product.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    } else {
      this.cartProducts = [
        ...this.cartProducts,
        { product: product, amount: 1 }
      ];
    }
  }

  deleteProductFromCard(product: any) {
    this.cartProducts = this.cartProducts.filter(
      item => item.product.id !== product.id
    );
  }
}