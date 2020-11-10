import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ ComponentsModule, BrowserModule, CommonModule ]
})

export class PagesModule {}
