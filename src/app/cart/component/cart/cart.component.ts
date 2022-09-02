import { Component, OnInit } from '@angular/core';
import { Products } from 'src/models/products';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: Products[]=[];
  constructor(private cartservice :CartService) {
  }

  ngOnInit(): void {
    this.product = this.cartservice.getproducts()

  }
  gettotalprice(): number {
    let grandtotal = 0;
    for(let item of this.product){
      grandtotal += item.price * item.quantity;
    }
    return grandtotal;
  }
  removeitem(item:any){
    this.cartservice.removecartitem(item);
    alert("Product removed from cart");
  }

}
