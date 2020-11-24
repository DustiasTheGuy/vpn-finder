import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OutpageComponent } from './pages/outpage/outpage.component';
import { ContactComponent } from './pages/contact/contact.component';

export const WebsiteRoutes: Routes = [
    { 
        path: '',  
        component: HomeComponent
    },
    { 
        path: 'visit', 
        component: OutpageComponent
    },
    { 
        path: 'contact', 
        component: ContactComponent
    }
];
