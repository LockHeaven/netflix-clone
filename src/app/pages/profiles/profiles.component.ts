import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css',
})
export class ProfilesComponent {
  routerService = inject(Router);

  goHome(): void {
    this.routerService.navigate(['/home']);
  }
}
