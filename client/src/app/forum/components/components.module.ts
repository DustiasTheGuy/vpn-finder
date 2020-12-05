import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { ReplyComponent } from './reply/reply.component';
 
@NgModule({
  declarations: [
    NavigationComponent,
    ModalComponent,
    SidenavComponent,
    TableComponent,
    ReplyComponent,
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
    ReplyComponent
  ]
})

export class ForumComponentsModule { }
