import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie, movies } from 'src/assets/movies';

@Component({
  selector: 'billboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billboard.component.html',
  styles: ``,
})
export class BillboardComponent implements OnInit {
  movie?: Movie;
  constructor() {}
  ngOnInit(): void {
    this.randomMovie();
  }
  ngAfterViewInit(): void {}

  randomMovie(): void {
    const moviesCount = movies.length;
    const randomIndex = Math.floor(Math.random() * moviesCount);
    this.movie = movies[randomIndex];
  }
}
