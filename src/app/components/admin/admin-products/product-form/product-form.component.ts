import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService, ProductService } from 'src/app/services';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories: any[] = [];
  productForm!: FormGroup;
  id: string = '';
  constructor(private categoryService: CategoriesService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.setProductForm()
  }

  ngOnInit(): void {
    this.getCategories()
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!
      if (this.id !== 'new')
        this.getProductById(this.id)
    })
  }

  setProductForm() {
    this.productForm = this.fb.group({
      _id: '',
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', [Validators.required]]
    })
  }

  getCategories() {
    this.categoryService.getAll()
      .subscribe({
        next: (res) => {
          this.categories = res
        },
        error: (e) => console.error(e)
      })
  }

  getProductById(id: string) {
    this.productService.getById(id)
      .subscribe({
        next: (res) => {
          this.productForm.patchValue(res)
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  save() {
    if (this.productForm.valid) {
      const request = this.id !== 'new' ? this.productService.update(this.productForm.value) : this.productService.create(this.productForm.value)
      request.subscribe({
        next: (res) => {
          console.log('success');
          this.router.navigate(['/admin/products'])
        },
        error: (e) => console.error(e)
      })
    }
  }

  get title() {
    return this.productForm.get('title')
  }

  get price() {
    return this.productForm.get('price')
  }

  get description() {
    return this.productForm.get('description')
  }

  get category() {
    return this.productForm.get('category')
  }

  get imageUrl() {
    return this.productForm.get('imageUrl')
  }

}
