import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ForumComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ForumComponent } from './forum.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { IndexComponent } from './pages/index/index.component';
import { TopicComponent } from './pages/topic/topic.component'; // root component
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { MyTopicsComponent } from './pages/my-topics/my-topics.component';
import { CanActivateRouteGuard } from './services/guards/can-activate.guard';
import { DndDirective } from './pages/create-post/dnd.directive';

@NgModule({
  declarations: [
    ForumComponent,
    CreatePostComponent,
    IndexComponent,
    TopicComponent,
    AccountSettingsComponent,
    MyTopicsComponent,
    DndDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ForumComponentsModule
  ],
  providers: [ CanActivateRouteGuard ]
})

export class ForumModule { }
