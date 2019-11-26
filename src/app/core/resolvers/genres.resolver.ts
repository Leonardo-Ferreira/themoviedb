import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Genre } from '../models/genre.model';
import { TheMovieDbService } from '../services/the-movie-db.service';


@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<Genre[]> {

  constructor(private theMovieDbService: TheMovieDbService) {
  }

  resolve(): Observable<Genre[]> {
    return this.theMovieDbService.getGenres();
  }

}
