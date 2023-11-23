import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from 'src/assets/movies';

@Component({
  selector: 'movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styles: ``,
})
export class MovieListComponent {
  @Input() title = '';
  @Input() movies: Movie[] = [];
}
