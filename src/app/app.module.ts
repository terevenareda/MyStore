import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './general/general.module';
import { ProductComponent } from './products/components/product/product.component';
import { ProductsModule } from './products/products.module';
import { CommonModule } from '@angular/common';
import { CheckoutModule } from './checkout/checkout.module';
import { ProductsService } from './products/services/products.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GeneralModule,
    ProductsModule,
    CommonModule,
    CheckoutModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
