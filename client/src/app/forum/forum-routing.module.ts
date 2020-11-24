import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreatePostComponent } from './pages/create-post/create-post.component'; // root component

export const ForumRoutes: Routes = [ 
    // all paths in this file are prefixed with /forum/<path>
    { 
      path: '', 
      component: IndexComponent
    },
    {
      path: 'create',
      component: CreatePostComponent
    }
];
