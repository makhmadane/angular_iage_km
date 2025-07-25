import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: any = [];

  //IOC INJECTION DE DEPENCDANCE
  constructor(private httpClient: HttpClient) {

  }

  //Constructeur 
  ngOnInit(): void {
      this.getAllProducts();

  }

  getAllProducts() {
    this.httpClient.get("http://localhost:8000/api/products").subscribe(
      (data: any) => {
        this.products = data.products;
        console.log(this.products)
      },
      () => {
        console.log("error")
      }
    )
  }

  deleteProduit(id : number){
    this.httpClient.delete("http://localhost:8000/api/products/"+id).subscribe(
      ()=>{
          this.getAllProducts();
      },
      ()=>{
          console.log("error")
      }
    )
  }
}
