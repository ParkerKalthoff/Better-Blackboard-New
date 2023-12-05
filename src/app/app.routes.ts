import { Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { CourseComponent } from '../course/course.component';
import { AssignmentSubmitComponent } from '../assignment-submit/assignment-submit.component';


export const routes: Routes = 
[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'course/:course-id', component: CourseComponent },
    { path: 'assignment_submit/:id', component: AssignmentSubmitComponent },
];
