import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { AccountMenuComponent } from '../account-menu/account-menu.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    CommonModule,
    NavbarItemComponent,
    MobileMenuComponent,
    AccountMenuComponent,
  ],
  templateUrl: './navbar.component.html',
  styles: '',
})
export class NavbarComponent {
  @ViewChild('window:scroll') buttonRef?: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onWindowsScroll($event: Event) {
    let htmlElement = $event.target as HTMLElement;
    let scrollOffset = htmlElement.children[0].scrollTop;
    if (scrollOffset >= this.TOP_OFFSET) {
      this.showBackgroung = true;
    } else {
      this.showBackgroung = false;
    }
  }
  TOP_OFFSET = 66;

  showMobileMenu = false;
  showAccountMenu = false;
  showBackgroung = false;
}
