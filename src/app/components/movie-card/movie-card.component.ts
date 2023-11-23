import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from 'src/assets/movies';
import { Subscription, timer } from 'rxjs';
import { PlayIconComponent } from 'src/app/icons/play-icon/play-icon.component';
import { AddIconComponent } from 'src/app/icons/add-icon/add-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [CommonModule, PlayIconComponent, AddIconComponent],
  templateUrl: './movie-card.component.html',
  styles: ``,
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  timeMouseMovie?: Subscription;

  routerService = inject(Router);

  watchMovie(): void {
    this.routerService.navigate(['/watch', this.movie.id]);
  }

  enterMovie(): void {
    this.timeMouseMovie = timer(3000).subscribe(() => console.log('HOLA'));
  }

  outMovie(): void {
    this.timeMouseMovie?.unsubscribe();
  }
}
