import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TheMovieDbService } from '../services/the-movie-db.service';
import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie> {

  constructor(private theMovieDbService: TheMovieDbService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
    if (route.params.id) {
      return this.theMovieDbService.getMovie(route.params.id);
    }
    return of(new Movie());
  }

}
