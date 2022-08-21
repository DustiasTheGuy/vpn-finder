import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [CardComponent],
})
export class ComponentsModule {}
