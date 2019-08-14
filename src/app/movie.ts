import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

export class Movie {
    title?: string;
    year?: number;
    rated?: string;
    released?: string;
    runtime?: string;
    genre?: string;
    director?: string;
    writer?: string;
    actors?: string;
    plot?: string;
    language?: string;
    country?: string;
    awards?: string;
    poster?: string;
    ratings?: string[];
    metascore?: string;
    imdbRating?: number;
    imdbVotes?: number;
    imdbID?: string;
    type?: string;
    DVD?: string;
    boxOffice?: string;
    production?: string;
    website?: string;
    Response?: boolean;

    constructor(input) {
        this.title = input.Title;
        this.year = input.Year;
        this.rated = input.Rated;
        this.released = input.Released;
        this.runtime = input.Runtime;
        this.genre = input.Genre;
        this.director = input.Director;
        this.writer = input.Writer;
        this.actors = input.Actors;
        this.plot = input.Plot;
        this.language = input.Language;
        this.country = input.Country;
        this.ratings = input.Ratings;
        this.metascore = input.Metascore;
        this.imdbRating = input.imdbRating;
        this.imdbVotes = input.imdbVotes;
        this.imdbID = input.imdbID;
        this.type = input.Type;
        this.DVD = input.DVD;
        this.boxOffice = input.BoxOffice;
        this.production = input.Production;
        this.website = input.Website;
        this.Response = input.Response;
    }

}
