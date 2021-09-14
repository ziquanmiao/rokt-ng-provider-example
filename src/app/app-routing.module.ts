import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'checkout', component: CheckoutComponent },
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
