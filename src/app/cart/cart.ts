
import { Component } from '@angular/core';
import { ShopService } from '../shop';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  constructor(public shopService: ShopService) {}

  get cart() {
    return this.shopService.getCart();
  }

  getTotal() {
    return this.shopService.getTotal();
  }

  onDeleteProductFromCard(product: any) {
    this.shopService.removeFromCart(product.id);
  }

  onChangeAmount(product: any, change: number) {
    this.shopService.changeAmount(product.id, change);
  }
}
