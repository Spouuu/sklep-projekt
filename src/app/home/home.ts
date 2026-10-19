import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [ProductList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  @Input() products: any[] = [];

  @Output() addToCard = new EventEmitter<any>();

  onAddToCart(product: any) {
    this.addToCard.emit(product);
  }
}