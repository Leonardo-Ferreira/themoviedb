import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Genre } from '../models/genre.model';
import { TheMovieDbService } from '../services/the-movie-db.service';
import { Page } from '../models/page.model';


@Injectable({
  providedIn: 'root'
})
export class PageResolver implements Resolve<Page> {

  constructor(private theMovieDbService: TheMovieDbService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Page> {
      return this.theMovieDbService.getPageMovies(route.params.id);
  }

}
