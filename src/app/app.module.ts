import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RelatedMoviesComponent } from './related-movies/related-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';
// import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
// import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RelatedMoviesComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
