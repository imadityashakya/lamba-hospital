import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', redirectTo:'home', pathMatch:'full',},
    {path:'contact-us', component:ContactUsComponent},
    {path:'**', redirectTo:'home'}
];
