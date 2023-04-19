import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as components from './components';
import * as services from './services';
import * as guards from './guards';

@NgModule({
  declarations: [
    AppComponent,
    components.NavbarComponent,
    components.LoginComponent,
    components.HomeComponent,
    components.ProductsComponent,
    components.ShoppingCartComponent,
    components.CheckoutComponent,
    components.OrdersSuccessComponent,
    components.MyOrdersComponent,
    components.AdminProductsComponent,
    components.AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    services.HttpService,
    services.DataService,
    services.AuthService,
    services.UserService,
    services.OrderService,
    services.ProductService,
    guards.AuthGuard,
    guards.RoleGuard,
    guards.LoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
