import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './modules/movies/movies.component';
import { GenresComponent } from './modules/genres/genres.component';
import { GenresResolver } from './core/resolvers/genres.resolver';
import { PageResolver } from './core/resolvers/page.resolver';
import { MovieResolver } from './core/resolvers/movie.resolver';
import { MovieComponent } from './modules/movie/movie.component';
import { CreditResolver } from './core/resolvers/credits.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'genres',
    component: GenresComponent,
    resolve: { genres: GenresResolver }
  },
  {
    path: 'movies',
    component: MoviesComponent,
    resolve: {
      page: PageResolver,
      genres: GenresResolver
    }
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    resolve: { movie: MovieResolver, credit: CreditResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
