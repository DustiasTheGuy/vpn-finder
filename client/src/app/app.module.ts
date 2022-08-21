import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { OutpageComponent } from './pages/outpage/outpage.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { ReadService } from './services/read/read.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    OutpageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ComponentsModule,
  ],
  exports: [],
  providers: [ReadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
