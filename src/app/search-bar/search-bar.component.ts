import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { SearchService } from '../search.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() movies = new EventEmitter<Movie[]>();

  constructor(private searchService: SearchService) { }

  ngOnInit() { }

  public onEnter(enteredText: string): void {
    this.searchService.getMovieTitle(enteredText).subscribe(movies => this.movies.emit(movies));
  }

}
