import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { KeyFilter } from 'primeng/keyfilter';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [InputTextModule, CommonModule, FloatLabel, KeyFilter, TextareaModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
