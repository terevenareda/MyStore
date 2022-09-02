import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/component/cart/cart.component';
import { CheckoutComponent } from './checkout/components/checkout/checkout.component';
import { SuccessComponent } from './checkout/components/success/success.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

const routes: Routes = [
  {path:"products", component: AllProductsComponent},
  {path:"details/:id", component: ProductDetailsComponent},
  {path:"cart", component: CartComponent},
  {path: "checkout" , component: CheckoutComponent},
  {path:"success" , component: SuccessComponent},
  {path:'', redirectTo:"products" ,pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
