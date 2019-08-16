import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RelatedMoviesComponent } from './related-movies/related-movies.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search-page', pathMatch: 'full' },
  { path: 'details/:imdbID', component: MovieDetailsComponent },
  {
    path: 'search-page',
    component: SearchPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
