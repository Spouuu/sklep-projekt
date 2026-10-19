
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShopService } from '../shop';

@Component({
  selector: 'app-product-page',
  imports: [RouterLink],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss'
})
export class ProductPage {
  products: any[] = [];
  product: any;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService
  ) {
    this.products = this.shopService.getProducts();

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.product = this.products.find(p => p.id === id);
    });
  }

  addToCart() {
    if (this.product) {
      this.shopService.addToCart(this.product);
    }
  }

  get otherProducts() {
    return this.products.filter(
      p => p.id !== this.product?.id
    );
  }
}
