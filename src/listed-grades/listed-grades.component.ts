import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listed-grades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listed-grades.component.html',
  styleUrl: './listed-grades.component.css'
})
export class ListedGradesComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
}
}
