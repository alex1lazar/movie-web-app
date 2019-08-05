import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'http://www.omdbapi.com/?apikey=[yourkey]&';

  constructor(private http: HttpClient) { }

  public getMovie() {
    return this.http.get<Movie[]>(`${this.url}/movie`);
  }

}
