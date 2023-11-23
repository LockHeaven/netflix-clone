import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from 'src/assets/movies';
import { Subscription, timer } from 'rxjs';
import { PlayIconComponent } from 'src/app/icons/play-icon/play-icon.component';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [CommonModule, PlayIconComponent],
  templateUrl: './movie-card.component.html',
  styles: ``,
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  timeMouseMovie?: Subscription;

  enterMovie(): void {
    this.timeMouseMovie = timer(3000).subscribe(() => console.log('HOLA'));
  }

  outMovie(): void {
    this.timeMouseMovie?.unsubscribe();
  }
}
