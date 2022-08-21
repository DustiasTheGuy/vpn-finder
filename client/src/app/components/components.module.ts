import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [CardComponent, LandingComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,

    FormsModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [CardComponent, LandingComponent],
})
export class ComponentsModule {}
