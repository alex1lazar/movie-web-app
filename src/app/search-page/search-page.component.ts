import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  movies = [];

  constructor() { }

  ngOnInit() {
    this.onMovies(this.movies);
  }

  onMovies(movies: Movie[]) {
    this.movies = movies;
  }

}
