import { MultiCardCarouselComponent } from './../../components/multi-card-carousel/multi-card-carousel.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MultiCardCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = [
    { title: 'Orthopedics', imageUrl: '/images/orthopedics.jpg', redirectTo:'contact-us'},
    { title: 'Ophthalmology', imageUrl: '/images/ophthalmology.jpg', redirectTo:'contact-us' },
    { title: 'Neuropsychiatry', imageUrl: '/images/neuropsychiatry.jpg', redirectTo:'contact-us'},
    { title: 'General Surgery', imageUrl: '/images/general-surgery.jpg', redirectTo:'contact-us' },
    { title: '24x7 Pharmacy', imageUrl: '/images/ophthalmology.jpg', redirectTo:'contact-us' },
    { title: 'Advanced ICU', imageUrl: '/images/ophthalmology.jpg', redirectTo:'contact-us' },
    { title: 'Rehabilitation Center', imageUrl: '/images/ophthalmology.jpg', redirectTo:'contact-us' },
    { title: 'Digital X-ray and EEG Facilities', imageUrl: '/images/ophthalmology.jpg', redirectTo:'contact-us' }
  ];

  
}
