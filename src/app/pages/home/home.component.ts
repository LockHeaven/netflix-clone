import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { movies } from 'src/assets/movies';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  /**
   *
   */
  constructor() {
    console.log(movies);
  }

  randomMovie(): void {
    const moviesCount = movies.length;
    const randomIndex = Math.floor(Math.random() * moviesCount);
    console.log(randomIndex);
  }
}
