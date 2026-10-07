import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from '../product-item/product-item';

@Component({
  imports: [ProductItem],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})
export class ProductList {
  @Input() products : any[] = [];
  @Output() addToCard = new EventEmitter<any>();
  onAddToCart(product:any){
    this.addToCard.emit(product);
  }
}
