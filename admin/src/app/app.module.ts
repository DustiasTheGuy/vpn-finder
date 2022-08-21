import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductsComponent } from './pages/products/products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EditProductComponent,
    CreateProductComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
