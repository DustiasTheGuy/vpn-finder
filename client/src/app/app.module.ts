import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebsiteModule } from './website/website.module';
import { ForumModule } from './forum/forum.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent, 
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    WebsiteModule,
    ForumModule
  ],
  exports: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
