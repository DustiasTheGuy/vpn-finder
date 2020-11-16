import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OutpageComponent } from './pages/outpage/outpage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { HttpConfig } from './services/http.config';

const config: SocketIoConfig = { url: new HttpConfig().getAddr(), options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OutpageComponent, 
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
