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

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) { }

  ngOnInit() {
   }

}
