import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
  @Input() cart: any[] = [];
  @Output() deleteProductFromCard = new EventEmitter<any>();
  getTotal() {
    let total = 0;

    for (let i = 0; i < this.cart.length; i++) {
      total += this.cart[i].price;
    }
    if(this.cart.length != 0){
      return total;
    }
    return 0;
  }
  onDeleteProductFromCard(product:any){
    this.deleteProductFromCard.emit(product)
  }
}