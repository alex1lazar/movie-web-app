import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { Movie } from '../movie';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie[];
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private location: Location,
    private title: string,
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    this.searchService.getMovieTitle(this.title)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

}
