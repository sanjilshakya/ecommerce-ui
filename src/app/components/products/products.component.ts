import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, ProductService } from 'src/app/services';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = []
  filteredProducts: any[] = []
  categoryId: string = '';
  constructor(private productService: ProductService,
    private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.categoryId = params.get('categoryId') ?? '';

      this.filteredProducts = this.categoryId ? this.products.filter(x => x.category === this.categoryId) : this.products
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getAll()
      .subscribe({
        next: (products) => {
          this.products = products
          this.filteredProducts = products
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
