import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation'

import * as components from './components';
import * as services from './services';
import * as guards from './guards';
import * as interceptors from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    components.NavbarComponent,
    components.LoginComponent,
    components.HomeComponent,
    components.ProductsComponent,
    components.ProductDetailsComponent,
    components.ShoppingCartComponent,
    components.CheckoutComponent,
    components.OrdersSuccessComponent,
    components.MyOrdersComponent,
    components.AdminProductsComponent,
    components.AdminOrdersComponent,
    components.ProductFormComponent,
    components.CategoriesComponent,
    components.ProductFilterComponent,
    components.ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CustomFormsModule
  ],
  providers: [
    services.HttpService,
    services.DataService,
    services.AuthService,
    services.UserService,
    services.OrderService,
    services.ProductService,
    services.CategoriesService,
    guards.AuthGuard,
    guards.RoleGuard,
    guards.LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: interceptors.HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
