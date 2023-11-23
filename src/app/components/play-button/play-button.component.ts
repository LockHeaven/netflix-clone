import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayIconComponent } from 'src/app/icons/play-icon/play-icon.component';
import { Movie } from 'src/assets/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'play-button',
  standalone: true,
  imports: [CommonModule, PlayIconComponent],
  templateUrl: './play-button.component.html',
  styles: ``,
})
export class PlayButtonComponent {
  @Input() movie!: Movie;

  routerService = inject(Router);

  watchMovie(): void {
    this.routerService.navigate(['/watch', this.movie.id]);
  }
}
