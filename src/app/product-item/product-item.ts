import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {
  @Input() products: any;

  @Output() addToCard = new EventEmitter<any>();

  addProduct() {
    this.addToCard.emit(this.products);
  }
}