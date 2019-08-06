import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-related-movies',
  templateUrl: './related-movies.component.html',
  styleUrls: ['./related-movies.component.css']
})
export class RelatedMoviesComponent implements OnInit {

  @Input() movies: Movie[];
  //@Input() 
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) { }

  ngOnInit() {
  //   this.getRelatedMovies();
   }

  // public getRelatedMovies() {
  //   const something = 'harry';
  //   this.searchService.getMovieTitle(something)
  //     .subscribe(movie => this.movie = movie);
  // }


}
