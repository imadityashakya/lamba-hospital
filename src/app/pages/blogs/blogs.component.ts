import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

}
