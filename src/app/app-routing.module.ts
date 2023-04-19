import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as components from './components';
import * as guards from './guards';

const routes: Routes = [
  { path: "", component: components.HomeComponent },
  { path: "products", component: components.ProductsComponent },
  { path: "shopping-cart", component: components.ShoppingCartComponent },
  { path: "check-out", component: components.CheckoutComponent, canActivate: [guards.AuthGuard] },
  { path: "order-success", component: components.OrdersSuccessComponent, canActivate: [guards.AuthGuard] },
  { path: "my-orders", component: components.MyOrdersComponent, canActivate: [guards.AuthGuard] },
  { path: "login", component: components.LoginComponent, canActivate: [guards.LoginGuard] },
  { path: "admin/products", component: components.AdminProductsComponent, canActivate: [guards.AuthGuard, guards.RoleGuard] },
  { path: "admin/orders", component: components.AdminOrdersComponent, canActivate: [guards.AuthGuard, guards.RoleGuard] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
