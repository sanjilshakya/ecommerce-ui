import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  products: any[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getAll()
      .subscribe({
        next: (res) => {
          this.products = res
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
