import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MultiCardCarouselComponent } from './../../components/multi-card-carousel/multi-card-carousel.component';
import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MultiCardCarouselComponent, RouterLink, GalleriaModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = [
    { title: 'Orthopedics', imageUrl: '/images/orthopedics.jpg', redirectTo:'/services/orthopedics'},
    { title: 'Ophthalmology', imageUrl: '/images/ophthalmology.jpg', redirectTo:'/services/ophthalmology' },
    { title: 'Neuropsychiatry', imageUrl: '/images/neuropsychiatry.jpg', redirectTo:'/services/neuropsychiatry'},
    { title: 'General Surgery', imageUrl: '/images/general-surgery.jpg', redirectTo:'/services/general-surgery' },
    { title: '24x7 Pharmacy', imageUrl: '/images/pharmacy.jpg', redirectTo:'/additional-services' },
    { title: 'Advanced ICU', imageUrl: '/images/advancedICU.jpg', redirectTo:'/additional-services' },
    { title: 'Rehabilitation Center', imageUrl: '/images/rehab.jpg', redirectTo:'/additional-services' },
    { title: 'Digital X-ray and EEG Facilities', imageUrl: '/images/xrayDigital.jpg', redirectTo:'/additional-services' }
  ];

  
}
