import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'http://www.omdbapi.com/?apikey=154db7cd&s=';

  constructor(private http: HttpClient) { }

  public getMovieTitle(title: string): Observable<Movie[]> {
    return this.http.get<any>(`${this.url}${title}`)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map(response => response.Search.map(movie => new Movie(movie)))
      );
  }

  // public getImdbID(id: string): Observable<Movie[]> {
  //   return of(Movie.find(movie => movie.imdbID === id)
  //   ); }
}
