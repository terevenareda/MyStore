import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/success/success.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CartModule } from '../cart/cart.module';
import { ActivatedRoute } from '@angular/router';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    CheckoutComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }

