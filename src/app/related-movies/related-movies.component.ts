import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../movie';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-related-movies',
  templateUrl: './related-movies.component.html',
  styleUrls: ['./related-movies.component.css']
})
export class RelatedMoviesComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(
    private router: Router,
    private searchService: SearchService,
  ) { }

  ngOnInit() {

  }

}
