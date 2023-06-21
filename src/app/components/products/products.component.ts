import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, ProductService } from 'src/app/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = []
  filteredProducts: any[] = []
  categories: any[] = []
  categoryId: string = '';
  constructor(private productService: ProductService,
    private categoryService: CategoriesService,
    private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.categoryId = params.get('categoryId') ?? '';

      this.filteredProducts = this.categoryId ? this.products.filter(x => x.category === this.categoryId) : this.products
    })
  }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
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

  getCategories() {
    this.categoryService.getAll()
      .subscribe({
        next: (categories) => {
          this.categories = categories
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
