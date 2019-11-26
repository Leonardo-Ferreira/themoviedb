import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [GenresComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class GenresModule { }
