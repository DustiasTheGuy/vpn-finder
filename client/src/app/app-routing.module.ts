import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteRoutes } from './website/website-routing.module';
import { ForumRoutes } from './forum/forum-routing.module';

import { WebsiteComponent } from './website/website.component';
import { ForumComponent } from './forum/forum.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: WebsiteComponent, children: WebsiteRoutes },
  { path: 'forum', component: ForumComponent, children: ForumRoutes },
  { path: '**', redirectTo: '/page-not-found' },
  { path: 'page-not-found', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { 
      scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
 