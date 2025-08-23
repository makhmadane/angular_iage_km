import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ProductResponse } from '../models/productResponse';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: any = [];

  //IOC INJECTION DE DEPENCDANCE
  constructor(private productService : ProductService) {

  }

  //Constructeur 
  ngOnInit(): void {
      this.getAllProducts();

  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (data: ProductResponse) => {
        this.products = data.products;
      },
      () => {
        console.log("error")
      }
    )
  }

  deleteProduit(id : number){
   this.productService.deleteProduit(id).subscribe(
      ()=>{
          this.getAllProducts();
      },
      (error)=>{
          console.log(error)
      }
    )
  }
}
