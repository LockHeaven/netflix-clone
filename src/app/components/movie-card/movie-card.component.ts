import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
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
  @ViewChild('videoCard') videoCard!: ElementRef<HTMLVideoElement>;
  @Input() movie!: Movie;

  timeMouseMovieEnter?: Subscription;
  timeMouseMovieOut?: Subscription;

  routerService = inject(Router);

  watchMovie(): void {
    this.routerService.navigate(['/watch', this.movie.id]);
  }

  enterMovie(): void {
    this.timeMouseMovieOut?.unsubscribe();
    this.videoCard.nativeElement.poster = this.movie.thumbnailUrl;
    this.videoCard.nativeElement.src = this.movie.videoUrl;

    this.timeMouseMovieEnter?.unsubscribe();
    this.timeMouseMovieEnter = timer(3000).subscribe(() => {
      this.videoCard.nativeElement.play();
    });
  }

  outMovie(): void {
    this.timeMouseMovieOut?.unsubscribe();
    this.timeMouseMovieOut = timer(2000).subscribe(() => {
      this.videoCard.nativeElement.currentTime = 0;
      this.videoCard.nativeElement.pause();
      this.videoCard.nativeElement.poster = '';
      this.videoCard.nativeElement.src = '';
    });

    this.timeMouseMovieEnter?.unsubscribe();
  }
}
