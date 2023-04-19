import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as components from './components';

const routes: Routes = [
  { path: "", component: components.HomeComponent },
  { path: "products", component: components.ProductsComponent },
  { path: "my-orders", component: components.MyOrdersComponent },
  { path: "shopping-cart", component: components.ShoppingCartComponent },
  { path: "check-out", component: components.CheckoutComponent },
  { path: "order-success", component: components.OrdersSuccessComponent },
  { path: "login", component: components.LoginComponent },
  { path: "admin/products", component: components.AdminProductsComponent },
  { path: "admin/orders", component: components.AdminOrdersComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
