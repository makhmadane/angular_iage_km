import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  
  getAllProducts() {
     return this.httpClient.get("http://localhost:8001/api/products")
  }

  
  deleteProduit(id : number){
     return this.httpClient.delete("http://localhost:8001/api/products/"+id);
  }

  save(data : Product){
    return  this.httpClient.post("http://localhost:8001/api/products",data)
  }

  update(data : Product){
    return  this.httpClient.put("http://localhost:8001/api/products/"+data.id,data)
  }
  
  getProductById(id:number) {
     return this.httpClient.get("http://localhost:8001/api/products/"+id)
  }
}

