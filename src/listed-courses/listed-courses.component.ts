import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listed-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listed-courses.component.html',
  styleUrl: './listed-courses.component.css'
})
export class ListedCoursesComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
}
}