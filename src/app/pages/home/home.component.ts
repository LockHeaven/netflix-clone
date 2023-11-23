import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { BillboardComponent } from 'src/app/components/billboard/billboard.component';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Movie, movies } from 'src/assets/movies';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    BillboardComponent,
    MovieListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  actionMovies: Movie[] = [];
  comedyMovies: Movie[] = [];
  adventureMovies: Movie[] = [];

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movies = movies;
    this.actionMovies = movies.filter((movie) => movie.genre === 'Action');
    this.comedyMovies = movies.filter((movie) => movie.genre === 'Comedy');
    this.adventureMovies = movies.filter(
      (movie) => movie.genre === 'Adventure'
    );
  }
}
