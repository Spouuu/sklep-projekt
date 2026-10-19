import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { ShopService } from '../shop';

@Component({
  selector: 'app-home',
  imports: [ProductList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  products: any[];

  constructor(private shopService: ShopService) {
    this.products = this.shopService.getProducts();
  }

  onAddToCart(product: any) {
    this.shopService.addToCart(product);
  }
}
