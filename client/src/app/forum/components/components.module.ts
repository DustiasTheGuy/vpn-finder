import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { ReplyComponent } from './reply/reply.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
 
@NgModule({
  declarations: [
    NavigationComponent,
    ModalComponent,
    SidenavComponent,
    TableComponent,
    ReplyComponent,
    FooterComponent,
    JumbotronComponent,
  ],
  imports: [  
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    ModalComponent,
    SidenavComponent,
    TableComponent,
    ReplyComponent,
    FooterComponent,
    JumbotronComponent
  ]
})

export class ForumComponentsModule { }
