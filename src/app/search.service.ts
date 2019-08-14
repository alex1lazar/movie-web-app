import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'http://www.omdbapi.com/?apikey=154db7cd&s=';

  constructor(private http: HttpClient) { }

  public getMovieTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}${title}`)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map(response => response['Search'].map(movie => new Movie(movie)))
      );
  }

}
