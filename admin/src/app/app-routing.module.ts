import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

import { CreateProductComponent } from './pages/create-product/create-product.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { ProductsComponent } from './pages/products/products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'edit', component: EditProductComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
