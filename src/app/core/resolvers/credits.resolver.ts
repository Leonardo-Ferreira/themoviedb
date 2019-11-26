import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TheMovieDbService } from '../services/the-movie-db.service';
import { Credit } from '../models/credit.model';


@Injectable({
  providedIn: 'root'
})
export class CreditResolver implements Resolve<Credit> {

  constructor(private theMovieDbService: TheMovieDbService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Credit> {
    if (route.params.id) {
      return this.theMovieDbService.getCredit(route.params.id);
    }
    return of(new Credit());
  }

}
