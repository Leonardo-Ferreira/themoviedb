import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SelectGenresComponent } from './components/select-genres/select-genres.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MoviesComponent, SelectGenresComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    NgSelectModule,
  ]
})
export class MoviesModule { }
