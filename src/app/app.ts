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
  i = 0;

  products = [
    { id: 1, name: 'Klawiatura', price: 199 },
    { id: 2, name: 'Mysz', price: 99 },
    { id: 3, name: 'Monitor', price: 899 },
    { id: 4, name: 'Słuchawki', price: 149 }
  ];

  addProductsToCard(product:any){
    const existingProduct = this.cartProducts.find((item) => item.product.id === product.id);

    if(existingProduct){
      this.cartProducts = this.cartProducts.map((item) => item.product.id === product.id ? {...item, amount: item.amount + 1 } : item)
    } else{
      this.cartProducts = [...this.cartProducts,{product, amount: 1}];
    }
    console.log(this.cartProducts);
  }

  deleteProductFromCard(product:any){
    let index = this.cartProducts.indexOf(product);
    this.cartProducts.splice(index, 1);
    console.log(this.cartProducts);
  }
}
