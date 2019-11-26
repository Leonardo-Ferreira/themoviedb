import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionReduced } from './description_reduced.pipe';

@NgModule({
  declarations: [
    DescriptionReduced
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescriptionReduced
  ]
})
export class PipesModule { }
