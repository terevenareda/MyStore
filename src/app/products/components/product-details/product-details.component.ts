import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductsService } from '../../services/products.service';
import { Products } from 'src/models/products';
import { ProductdetailsService } from '../../services/productdetails.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
item:Products;
  constructor(private productdetailsService :ProductdetailsService , private activatedroute: ActivatedRoute, private service:ProductsService, private cartservice : CartService) {
    this.item = {
      id: 1,
      name : '',
      price: 1,
      image: '',
      description : '',
      quantity: 1
    }
   }

  ngOnInit(): void {
    this.item = this.productdetailsService.getdetails();

  }
  addtocart(item:Products){
    this.cartservice.addtocart(item);
    alert("Product added to cart");
   }
}
