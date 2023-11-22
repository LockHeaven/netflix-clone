import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-item.component.html',
  styles: '',
})
export class NavbarItemComponent {
  @Input() label = '';
}
