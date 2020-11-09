import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [ ComponentsModule, BrowserModule ]
})

export class PagesModule {}
