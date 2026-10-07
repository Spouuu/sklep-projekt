import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';

@Component({
  imports: [RouterOutlet, ProductList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})


export class App {
  products = [
    { id: 1, name: 'Klawiatura', price: 199 },
    { id: 2, name: 'Mysz', price: 99 },
    { id: 3, name: 'Monitor', price: 899 },
    { id: 4, name: 'Słuchawki', price: 149 }
  ];

  addProductsToCard(product:any){
    console.log(this.products)
  }
}
