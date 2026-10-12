import { Component, EventEmitter, Input, Output } from '@angular/core';
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
}
