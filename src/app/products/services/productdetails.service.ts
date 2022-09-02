import { Injectable } from '@angular/core';
import { Products } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  details : Products;
  constructor() {
    this.details = {
      id: 1,
      name : '',
      price: 1,
      image: '',
      description : '',
      quantity: 1
    }
   }
  getdetails(){
    return this.details;
  }
  addDetails(productdetails : Products){
    this.details = productdetails;
    return this.details;
  }
}
