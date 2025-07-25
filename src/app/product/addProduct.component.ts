import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './addProduct.component.html',
  styleUrl: './product.component.css'
})
export class addProductComponent implements OnInit {

   formProduct: FormGroup = new FormGroup({
    name: new FormControl(''),
    prixe: new FormControl(''),
    description: new FormControl('')
  });

  //IOC INJECTION DE DEPENCDANCE
  constructor(private httpClient: HttpClient, private router : Router) {

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.httpClient.post("http://localhost:8000/api/products",this.formProduct.value).subscribe(
      ()=>{
        this.router.navigateByUrl('/product');
      },
      ()=>{
        console.log("error");
      }
    )
  }

  
}
