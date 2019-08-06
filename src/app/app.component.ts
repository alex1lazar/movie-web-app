import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle = 'MuvieHub';
  movies = [];
  onMovies(movies: Movie[]) {
    this.movies = movies;
  }
}
