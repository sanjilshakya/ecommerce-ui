import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Input('categoryId') categoryId: string = '';
  categories: any[] = []


  constructor(
    private categoryService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.getCategories()
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
