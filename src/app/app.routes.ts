import { SGeneralSurgeryComponent } from './pages/s-general-surgery/s-general-surgery.component';
import { AdditionalServicesComponent } from './pages/additional-services/additional-services.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { SOrthopedicsComponent } from './pages/s-orthopedics/s-orthopedics.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SOphthalmologyComponent } from './pages/s-ophthalmology/s-ophthalmology.component';
import { SNeuropsychiatryComponent } from './pages/s-neuropsychiatry/s-neuropsychiatry.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', redirectTo:'home', pathMatch:'full',},
    {path:'contact-us', component:ContactUsComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'appointment', component:AppointmentComponent},
    {path:'services/orthopedics', component:SOrthopedicsComponent},
    {path:'services/ophthalmology', component:SOphthalmologyComponent},
    {path:'services/neuropsychiatry', component:SNeuropsychiatryComponent},
    {path:'services/general-surgery', component:SGeneralSurgeryComponent},
    {path:'additional-services', component:AdditionalServicesComponent},
    {path:'blogs', component:BlogsComponent},
    {path:'blog-detail', component:BlogDetailComponent},
    {path:'**', redirectTo:'home'}
];
