
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  @Input() products: any[] = [];

  @Output() onAddProductsToCard = new EventEmitter<any>();
}
