import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/core/models/movie.model';
import { environment } from 'src/environments/environment.prod';
import { Credit } from 'src/app/core/models/credit.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  movie: Movie;
  credit: Credit;
  baseURLImage = environment.BASE_URL_IMAGE;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.data.subscribe(data => {
      if (data.movie) {
        this.movie = data.movie;
      }
      if (data.credit) {
        this.credit = data.credit;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
