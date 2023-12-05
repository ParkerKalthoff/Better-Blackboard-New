import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listed-organization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listed-organization.component.html',
  styleUrl: './listed-organization.component.css'
})
export class ListedOrganizationComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    
}

turnOff() {
  this.isVisible = false;
}
}
