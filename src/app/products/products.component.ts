import {Component} from '@angular/core';
import {ProductService} from "../product.service";
import {CategoryService} from "../category.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;

  constructor(productService: ProductService,
              categoryService: CategoryService,
              route: ActivatedRoute
  ) {
    productService.getAll()
      .pipe(
        switchMap(products => {
          this.products = products;
          return route.queryParamMap;
        }))
      .subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
    })

    this.categories$ = categoryService.getAll();
  }


}
