import { environment } from 'src/environments/environment';

export class Endpoints {

  // the movie db
  static genresUrl = `${environment.BASE_URL}/genre/movie/list`;
  static discoverMovie = `${environment.BASE_URL}/discover/movie`;
  static movieUrl = `${environment.BASE_URL}/movie`;
}
