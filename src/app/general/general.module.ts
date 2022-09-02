import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartModule } from '../cart/cart.module';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CartModule,
    ProductsModule
  ],
  exports:[
    HeaderComponent,
    FormsModule
  ]
})
export class GeneralModule { }
