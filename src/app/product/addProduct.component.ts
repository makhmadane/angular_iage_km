import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './addProduct.component.html',
  styleUrl: './product.component.css'
})
export class addProductComponent implements OnInit {

   id! : number;

   product! : Product

   formProduct: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    prixe: new FormControl(''),
    description: new FormControl('')
  });

  //IOC INJECTION DE DEPENCDANCE
  constructor(private router : Router, private productService : ProductService,
    private route : ActivatedRoute
  ) {

  }

  ngOnInit(): void {
     this.id =this.route.snapshot.params['id'];
    this.getProductById(this.id);
  }


  getProductById(id:number){
     this.productService.getProductById(id).subscribe(
      (data: any)=>{
          this.product = data;
          this.formProduct.patchValue(this.product)
      },
      (error)=>{
          console.log(error)
      }
     )
  }
  onSubmit(){
    if(this.id){  
      this.productService.update(this.formProduct.value).subscribe(
        ()=>{
        this.router.navigateByUrl('/product');
      },
      ()=>{
        console.log("error");
      }
      )
    }else{
      this.productService.save(this.formProduct.value).subscribe(
      ()=>{
        this.router.navigateByUrl('/product');
      },
      ()=>{
        console.log("error");
      }
    )
    }
  }

  
}
