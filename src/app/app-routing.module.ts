import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RelatedMoviesComponent } from './related-movies/related-movies.component';

const routes: Routes = [
  {path: 'search-bar', component: SearchBarComponent},
  {path: 'movie-detail', component: MovieDetailsComponent},
  {path: 'related-movies', component: RelatedMoviesComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
