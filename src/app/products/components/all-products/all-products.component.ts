import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductsService } from '../../services/products.service';
import { Products } from 'src/models/products';
import { Router } from '@angular/router';
import { ProductdetailsService } from '../../services/productdetails.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  product : Products[]=[];
  constructor(private productdetailsService:ProductdetailsService, private router: Router, private http: HttpClient,private cartservice: CartService,private services: ProductsService) { }

  ngOnInit(): void {
    this.services.getallproducts().subscribe(product=>{
      this.product = product;
    })
    }

    addtocart(item:any){
      this.cartservice.addtocart(item);
     }
     viewevent(event:Products){
      this.productdetailsService.addDetails(event);
      this.router.navigate(['/details/'+ event.id])
     }
    }


