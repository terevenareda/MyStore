import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './component/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutModule } from '../checkout/checkout.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    CheckoutModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    BrowserModule,
    CheckoutModule
  ]
})
export class CartModule { }
