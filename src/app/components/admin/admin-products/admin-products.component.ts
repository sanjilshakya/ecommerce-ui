import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  products: Product[] = []
  filteredProducts: Product[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getAll()
      .subscribe({
        next: (res) => {
          this.filteredProducts = this.products = res
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  deleteProduct(id: string) {
    if (!confirm('Are you sure you want to delete this product ?')) return
    this.productService.delete(id)
      .subscribe({
        next: (res) => {
          if (res) {
            const index = this.products.findIndex(x => x._id === id)
            if (index > -1)
              this.products.splice(index, 1)
          }
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  searchProduct(keyword: string) {
    this.filteredProducts = keyword ? this.products.filter(x =>x.title.toLowerCase().includes(keyword.toLowerCase())) : this.products
  }

}
