import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ForumComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

import { DndDirective } from './pages/account/create-post/dnd.directive';
import { CanActivateRouteGuard } from './services/guards/can-activate.guard';
import { CantActivateRouteGuard } from './services/guards/cant-activate.guard';

import { ForumComponent } from './forum.component';
import { CreatePostComponent } from './pages/account/create-post/create-post.component';
import { IndexComponent } from './pages/index/index.component';
import { TopicComponent } from './pages/topic/topic.component'; // root component
import { SettingsComponent } from './pages/account/settings/settings.component';
import { MyTopicsComponent } from './pages/account/my-topics/my-topics.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AccountComponent } from './pages/account/account.component';
import { AsideComponent } from './pages/account/aside/aside.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

@NgModule({
  declarations: [
    DndDirective,
    ForumComponent,
    CreatePostComponent,
    IndexComponent,
    TopicComponent, 
    SettingsComponent,
    MyTopicsComponent, 
    SignInComponent,
    AccountComponent,
    AsideComponent,
    SignUpComponent,
    RecoveryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ForumComponentsModule
  ],
  providers: [ 
    CanActivateRouteGuard, 
    CantActivateRouteGuard 
  ]
})

export class ForumModule { }
