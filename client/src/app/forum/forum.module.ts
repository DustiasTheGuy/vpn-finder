import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ForumComponentsModule } from './components/components.module';
import { WebsiteComponentsModule } from '../website/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ForumComponent } from './forum.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { IndexComponent } from './pages/index/index.component'; // root component

@NgModule({
  declarations: [
    ForumComponent,
    CreatePostComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ForumComponentsModule,
    WebsiteComponentsModule
  ]
})

export class ForumModule { }
