import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterLink,PaginatorModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
  }
}
