import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {

  @Input() products: any[] = [];

  @Output() addToCard = new EventEmitter<any>();

  onAddToCart(product: any) {
    this.addToCard.emit(product);
  }
}
