import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './addProduct.component.html',
  styleUrl: './product.component.css'
})
export class addProductComponent implements OnInit {
  submitted = false;
  id!: number;

  product!: Product

  formProduct: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prixe: new FormControl('', [Validators.required]),
    description: new FormControl('')
  });

  //IOC INJECTION DE DEPENCDANCE
  constructor(private router: Router, private productService: ProductService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']){
      this.id = this.route.snapshot.params['id'];
      this.getProductById(this.id);
    }
   
  }

  get f2(){
    return this.formProduct.controls;
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      (data: Product) => {
        this.product = data;
        this.formProduct.patchValue(this.product)
      },
      (error) => {
        console.log(error)
      }
    )
  }
  onSubmit() {
    this.submitted = true;
    if (this.formProduct.valid) {
      if (this.id) {
        this.productService.update(this.formProduct.value).subscribe(
          () => {
            this.router.navigateByUrl('/product');
          },
          () => {
            console.log("error");
          }
        )
      } else {
        this.productService.save(this.formProduct.value).subscribe(
          () => {
            this.router.navigateByUrl('/product');
          },
          () => {
            console.log("error");
          }
        )
      }
    }

  }


}
