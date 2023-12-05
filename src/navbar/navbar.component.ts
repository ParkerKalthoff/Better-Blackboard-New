import { Component } from '@angular/core';
import { ListedCoursesComponent } from '../listed-courses/listed-courses.component';
import { ListedOrganizationComponent } from '../listed-organization/listed-organization.component';
import { ProfileComponent } from '../profile/profile.component';
import { ListedGradesComponent } from '../listed-grades/listed-grades.component';
import { ListedProfileComponent } from '../listed-profile/listed-profile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ListedCoursesComponent, ListedOrganizationComponent, ProfileComponent, ListedGradesComponent, ListedProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
