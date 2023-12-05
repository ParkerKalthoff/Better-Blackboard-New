import { Component } from '@angular/core';
import { ListedCoursesComponent } from '../listed-courses/listed-courses.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ListedCoursesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
