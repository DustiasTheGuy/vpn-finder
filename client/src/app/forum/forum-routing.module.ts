import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component'; // root component
import { CreatePostComponent } from './pages/account/create-post/create-post.component'; 
import { TopicComponent } from './pages/topic/topic.component'; 
import { SettingsComponent } from './pages/account/settings/settings.component';
import { MyTopicsComponent } from './pages/account/my-topics/my-topics.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AccountComponent } from './pages/account/account.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

import { CanActivateRouteGuard } from './services/guards/can-activate.guard';
import { CantActivateRouteGuard } from './services/guards/cant-activate.guard';

export const ForumRoutes: Routes = [ 
    // all paths in this file are prefixed with /forum/<path>
    { path: '', component: IndexComponent },
    { path: 'topic/:id', component: TopicComponent },
    { path: 'sign-in', component: SignInComponent, canActivate: [ CantActivateRouteGuard ] },
    { path: 'sign-up', component: SignUpComponent, canActivate: [ CantActivateRouteGuard ] },
    { path: 'account', component: AccountComponent, canActivate: [ CanActivateRouteGuard ], 
        children: [
            { path: 'create', component: CreatePostComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'my-topics', component: MyTopicsComponent },
            { path: '**', redirectTo: '/forum/account/settings', pathMatch: 'full' }
        ]
    }
];
 