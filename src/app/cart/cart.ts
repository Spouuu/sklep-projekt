import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  @Input() cart: any[] = [];

  increase(item: any) {
    item.amount++;
  }

  decrease(item: any) {
    if (item.amount > 1) {
      item.amount--;
    } else {
      this.cart = this.cart.filter(
        product => product.product.id !== item.product.id
      );
    }
  }

  onDeleteProductFromCard(item: any) {
  this.cart = this.cart.filter(
    product => product.product.id !== item.product.id
  );
}

  getTotal(): number {
    let total = 0;

    for (const item of this.cart) {
      total += item.product.price * item.amount;
    }

    return total;
  }
}
