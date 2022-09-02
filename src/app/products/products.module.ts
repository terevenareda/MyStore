import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { CartModule } from '../cart/cart.module';
import { RouterModule } from '@angular/router';
import { ProductsService } from './services/products.service';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    CartModule,
    RouterModule,

  ],
  exports:[
    ProductComponent,
    FormsModule,

  ]
})
export class ProductsModule { }
