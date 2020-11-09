import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ CardComponent, JumbotronComponent, FooterComponent ],
  imports: [ 
    FormsModule, 
    BrowserModule, 
    MatTooltipModule,
    MatCardModule,
    MatButtonModule
  ], 
  exports: [ 
    CardComponent, 
    JumbotronComponent, 
    FooterComponent 
  ]
})

export class ComponentsModule {}
