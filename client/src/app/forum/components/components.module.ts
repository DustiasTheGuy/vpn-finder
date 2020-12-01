import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ModalComponent } from './modal/modal.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    NavigationComponent,
    AsideComponent,
    ModalComponent,
    SignInComponent,
    BreadcrumbsComponent,
    TableComponent,
  ],
  imports: [  
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    AsideComponent,
    ModalComponent,
    SignInComponent,
    BreadcrumbsComponent,
    TableComponent
  ]
})

export class ForumComponentsModule { }
