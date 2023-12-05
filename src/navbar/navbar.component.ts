import { Component } from '@angular/core';
import { ListedCoursesComponent } from '../listed-courses/listed-courses.component';
import { ListedOrganizationComponent } from '../listed-organization/listed-organization.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ListedCoursesComponent, ListedOrganizationComponent, ProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
