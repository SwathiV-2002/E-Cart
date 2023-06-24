import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';
const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'products',component:ProductsComponent, canActivate: [AuthGuard]},
  {path:'cart', component:CartComponent },
  {path:'login', component:LoginComponent},
  {path: 'checkout', component:CheckoutComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
