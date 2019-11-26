import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { CardCrewComponent } from './components/card-crew/card-crew.component';
import { CardCastComponent } from './components/card-cast/card-cast.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [MovieComponent, CardCrewComponent, CardCastComponent],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class MovieModule { }
