import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';

@Component({
  imports: [RouterOutlet, ProductList, Cart],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})


export class App {
  cartProducts : any[]= [];
  amount = 0;
  total = 0;

  products = [
    { id: 1, name: 'Klawiatura', price: 199 },
    { id: 2, name: 'Mysz', price: 99 },
    { id: 3, name: 'Monitor', price: 899 },
    { id: 4, name: 'Słuchawki', price: 149 }
  ];

  addProductsToCard(product:any){
    this.amount = this.amount + 1;
    this.cartProducts = [...this.cartProducts,product];
    console.log(this.cartProducts);
  }

  getTotal(product: any){
    this.total = product.price;
  }
}
