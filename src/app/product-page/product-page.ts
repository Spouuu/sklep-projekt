
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [RouterLink],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss'
})
export class ProductPage {
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

  product = this.products[0];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id) ?? this.products[0];
  }

  get otherProducts() {
    return this.products.filter(p => p.id !== this.product.id);
  }
}
