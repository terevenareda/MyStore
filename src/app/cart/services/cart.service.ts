import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productlist : Products[]=[];


  constructor() { }
  getproducts(){
    return this.productlist;
  }
  setproduct(product: Products){
    this.productlist.push(product);

  }
  addtocart(product:Products){
    let productExists = false;

      for(let i in this.productlist){
      if(this.productlist[i].id === product.id){
       this.productlist[i].quantity++;
       productExists =  true
       break;
       }
      }

      if(!productExists){
        this.productlist.push(product);
      }


    }


  removecartitem(product : any){
    this.productlist.map((a:any, index: any)=> {
      if(product.id ===a.id){
        this.productlist.splice(index,1)
      }
  })

}
}
