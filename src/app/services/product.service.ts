import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductResponse } from '../models/productResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = "http://localhost:8000/api/"
  constructor(private httpClient: HttpClient) { }

  
  getAllProducts() {
     return this.httpClient.get<ProductResponse>(this.URL+"products")
  }

  
  deleteProduit(id : number){
     return this.httpClient.delete(this.URL+"products/"+id);
  }

  save(data : Product){
    return  this.httpClient.post(this.URL+"products",data)
  }

  update(data : Product){
    return  this.httpClient.put(this.URL+"products/"+data.id,data)
  }
  
  getProductById(id:number) {
     return this.httpClient.get<Product>(this.URL+"products/"+id)
  }
}

