import { Injectable } from '@angular/core';
import { Products } from 'src/models/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getallproducts(): Observable<Products[]>{
    return this.http.get<Products[]>("./assets/data.json")
  }
  getproductbyid(id:any){
    return this.http.get("./assets/data.json"+id)

  }

}
