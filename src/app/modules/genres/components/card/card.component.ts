import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() genre: any;
  @Output() movies = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectGenre(event: Event, id: number) {
    event.preventDefault();
    // navigate movies
    console.log('my id movie is:' + id);
    this.movies.emit(id);
  }

}
