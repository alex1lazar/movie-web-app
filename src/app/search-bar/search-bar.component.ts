import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchService } from '../search.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  moviesArray: Movie[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getMovie().subscribe(movies => {
      this.moviesArray = movies;
    });
   }

}
