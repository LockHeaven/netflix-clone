import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Movie, movies } from 'src/assets/movies';
import { BackIconComponent } from 'src/app/icons/back-icon/back-icon.component';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, BackIconComponent],
  templateUrl: './movie.component.html',
  styles: ``,
})
export class MovieComponent implements OnInit {
  movie?: Movie;
  activatedRouteService = inject(ActivatedRoute);
  routerService = inject(Router);

  timerTitle?: Subscription;
  showTitle = false;
  isPlayingVideo = false;

  ngOnInit(): void {
    this.activatedRouteService.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.movie = movies.find((movie) => movie.id === +id);
      }
    });
  }

  hideTitle(): void {
    this.timerTitle?.unsubscribe();
    if (!this.isPlayingVideo) {
      this.showTitle = true;
      return;
    }
    this.showTitle = true;
    this.timerTitle = timer(2500).subscribe(() => {
      this.showTitle = false;
    });
  }

  pauseVideo(): void {
    this.isPlayingVideo = false;
    this.hideTitle();
  }

  playVideo(): void {
    this.isPlayingVideo = true;
    this.hideTitle();
  }

  back(): void {
    this.routerService.navigate(['/home']);
  }
}
