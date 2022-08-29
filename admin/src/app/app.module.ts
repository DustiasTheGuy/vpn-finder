import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent, ProductComponent } from './components';
import { ProductsComponent } from './pages/products/products.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductComponent,
    ProductsComponent,
    UpdateProductComponent,
    CreateProductComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
  