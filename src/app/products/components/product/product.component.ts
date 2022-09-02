import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/models/products';
import { ProductdetailsService } from '../../services/productdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() data:Products;
@Output() item: EventEmitter<Products>= new EventEmitter;
@Output() viewproduct: EventEmitter<Products>= new EventEmitter;
  constructor(private productdetailsService :ProductdetailsService, private router: Router) {
    this.data = {
      id: 1,
      name : '',
      price: 1,
      image: '',
      description : '',
      quantity: 1
    }
   }

  ngOnInit(): void {
  }
  add(data: Products){
    this.item.emit(data)
    alert("Product added to cart");
  }
  view(data: Products){
    this.viewproduct.emit(data)
  }
}
