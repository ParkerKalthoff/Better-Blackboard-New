import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listed-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listed-profile.component.html',
  styleUrl: './listed-profile.component.css'
})
export class ListedProfileComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    
}

}
