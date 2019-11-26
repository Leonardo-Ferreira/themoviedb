import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Endpoints } from './endpoints';
import { Page } from '../models/page.model';
import { Genre } from '../models/genre.model';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { Credit } from '../models/credit.model';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDbService {

  constructor(private http: HttpClient) { }

  getGenres() {
    const url = `${Endpoints.genresUrl}`;
    return this.http.get<any>(url).pipe(map(data => data.genres));
  }

  getPageMovies(idsGenre?: string, numberPage = 1) {
    const url = `${Endpoints.discoverMovie}`;
    let httpParams = new HttpParams();
    if (idsGenre) {
      httpParams = new HttpParams().append('with_genres', idsGenre);
    }
    httpParams = httpParams.append('page', numberPage.toString());
    return this.http.get<Page>(url, { params: httpParams });
  }

  getMovie(id) {
    const url = `${Endpoints.movieUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

  getCredit(id) {
    const url = `${Endpoints.movieUrl}/${id}/credits`;
    return this.http.get<Credit>(url);
  }
}
