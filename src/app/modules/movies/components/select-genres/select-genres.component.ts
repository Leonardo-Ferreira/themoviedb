import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Genre } from 'src/app/core/models/genre.model';

@Component({
  selector: 'app-select-genres',
  templateUrl: './select-genres.component.html',
  styleUrls: ['./select-genres.component.css']
})
export class SelectGenresComponent {
  @Input() genres: Genre[];
  @Output() idsGenres = new EventEmitter<string>();
  genresIdSelects = [];
  constructor() { }

  onChange(genres: Genre[]) {
    let ids = '';
    let separator = '';
    genres.forEach((genre: Genre) => {
      ids += `${separator}${genre.id}`;
      separator = `,`;
    });
    this.idsGenres.emit(ids);
  }

}
