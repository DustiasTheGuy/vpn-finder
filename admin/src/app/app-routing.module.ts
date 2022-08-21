import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductComponent } from './pages/create-product/create-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'edit', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
