import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService, ProductService } from 'src/app/services';

@Component({
  selector: 'product-form',
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
      imageUrl: ['', Validators.required]
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
      const formData = this.productForm.value;
      this.id === 'new' && delete formData._id
      const request = this.id !== 'new' ? this.productService.update(formData) : this.productService.create(formData)
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
