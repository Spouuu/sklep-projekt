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
  
  products = [
  {
    id: 1,
    name: 'Klawiatura',
    price: 199,
    image: 'keyboard.jpg',
    description: 'Klawiatura do codziennej pracy i gier.',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Mysz',
    price: 99,
    image: 'mouse.jpg',
    description: 'Wygodna mysz komputerowa.',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Monitor',
    price: 899,
    image: 'monitor.jpg',
    description: 'Monitor do nauki, pracy i rozrywki.',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Słuchawki',
    price: 149,
    image: 'headphones.jpg',
    description: 'Słuchawki do słuchania muzyki.',
    rating: 4.3
  }
];
  @Output() addToCard = new EventEmitter<any>();

  onAddToCart(product: any) {
    this.addToCard.emit(product);
  }
}