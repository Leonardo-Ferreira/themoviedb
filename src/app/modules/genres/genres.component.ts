import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/core/models/genre.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit, OnDestroy {

  genres = new Array<Genre>();
  subscription = new Subscription();
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.data.subscribe((data) => {
      if (data.genres) {
        this.genres = data.genres;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectMovie(id: number) {
    this.router.navigate(['movies', id]);
  }

}
