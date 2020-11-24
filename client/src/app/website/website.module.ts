import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpConfig } from './services/http.config';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppRoutingModule } from '../app-routing.module';

import { ComponentsModule } from './components/components.module';
import { WebsiteComponent } from './website.component'; // root component
import { OutpageComponent } from './pages/outpage/outpage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const config: SocketIoConfig = { 
  url: !new HttpConfig().getEnv() ? 'http://localhost:3000' : 'https://vpnfind.site', 
  options: {} 
};

@NgModule({
  declarations: [
    HomeComponent,
    OutpageComponent,
    ContactComponent,
    WebsiteComponent
  ],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AppRoutingModule
  ]
})

export class WebsiteModule { }
