import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'account-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-menu.component.html',
  styles: '',
})
export class AccountMenuComponent {
  routeService = inject(Router);

  signOut(): void {
    this.routeService.navigate(['/auth']);
  }
}
