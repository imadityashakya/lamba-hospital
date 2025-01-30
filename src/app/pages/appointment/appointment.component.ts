import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { KeyFilter } from 'primeng/keyfilter';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [InputTextModule, CommonModule, FloatLabel, DatePicker, Select, KeyFilter, TextareaModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent implements OnInit{
  today: Date = new Date();
  department = ["Orthopedics", "Ophthalmology", "Neuropsychiatry", "General Surgery", "24x7 Pharmacy", "Advanced ICU", "Rehabilitation Center", "Digital X-ray and EEG Facilities"];

ngOnInit(): void {
  this.today.setHours(0, 0, 0, 0);
}


}
