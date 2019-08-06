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
    }

}
