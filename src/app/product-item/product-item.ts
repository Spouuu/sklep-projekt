import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-item',
  styleUrl: './product-item.scss',
  templateUrl: './product-item.html',
})
export class ProductItem {
  @Input() product: any;
  @Output() addToCard = new EventEmitter<any>();
  dodajDoKoszyka(){
    this.addToCard.emit(this.product);
  }
}
