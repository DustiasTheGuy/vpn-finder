import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';

@NgModule({
  declarations: [
    NavigationComponent,
    AsideComponent,
    SignupModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    AsideComponent,
    SignupModalComponent
  ]
})

export class ForumComponentsModule { }
