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
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';
import { EmailListComponent } from './email-list/email-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({ 
  declarations: [
    CardComponent, 
    LandingComponent,
    CookieConsentComponent,
    EmailListComponent,
    FooterComponent
  ],
  imports: [ 
    BrowserModule, 
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    CommonModule, 
    FormsModule,
    RouterModule
  ], 
  exports: [ 
    CardComponent, 
    LandingComponent, 
    FooterComponent,
    CookieConsentComponent,
    EmailListComponent
  ]
})

export class WebsiteComponentsModule {}
