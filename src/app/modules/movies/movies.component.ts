import { Component, OnInit, OnDestroy } from '@angular/core';
import { TheMovieDbService } from 'src/app/core/services/the-movie-db.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/core/models/page.model';
import { environment } from '../../../environments/environment.prod';
import { Genre } from 'src/app/core/models/genre.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  page: Page;
  genres: Genre[];
  baseURLImage = environment.BASE_URL_IMAGE;
  idsGenres = '';
  constructor(
    private theMovieDbService: TheMovieDbService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  subscription = new Subscription();
  ngOnInit() {
    this.subscription = this.route.data.subscribe(data => {
      if (data.page) {
        this.page = data.page;
      }
      if (data.genres) {
        this.genres = data.genres;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  pageChange(page: number) {
    this.theMovieDbService.getPageMovies(this.idsGenres, page).subscribe(data => this.page = data);
  }

  selectMovie(id) {
    this.router.navigate(['movie', id]);
  }

  onChangeIdsGenres(ids: string) {
    this.idsGenres = ids;
    this.theMovieDbService.getPageMovies(ids).subscribe(data => this.page = data);
  }

}
