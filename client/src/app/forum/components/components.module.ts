import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    NavigationComponent,
    AsideComponent,
    SignupModalComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    AsideComponent,
    SignupModalComponent,
    SignInComponent
  ]
})

export class ForumComponentsModule { }
