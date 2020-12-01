import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component'; // root component
import { CreatePostComponent } from './pages/create-post/create-post.component'; 
import { TopicComponent } from './pages/topic/topic.component'; 
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { MyTopicsComponent } from './pages/my-topics/my-topics.component';
import { CanActivateRouteGuard } from './services/guards/can-activate.guard';

export const ForumRoutes: Routes = [ 
    // all paths in this file are prefixed with /forum/<path>
    { path: '', component: IndexComponent },
    { path: 'create', component: CreatePostComponent, canActivate: [ CanActivateRouteGuard ] },
    { path: 'account-settings', component: AccountSettingsComponent, canActivate: [ CanActivateRouteGuard ] },
    { path: 'my-topics', component: MyTopicsComponent, canActivate: [ CanActivateRouteGuard ] },
    { path: ':id', component: TopicComponent }
];
