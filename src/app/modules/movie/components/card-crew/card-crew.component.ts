import { Component, OnInit, Input } from '@angular/core';
import { Crew } from 'src/app/core/models/crew.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-crew',
  templateUrl: './card-crew.component.html',
  styleUrls: ['./card-crew.component.css']
})
export class CardCrewComponent implements OnInit {
  @Input() crew: Crew;
  imageURL = environment.BASE_URL_IMAGE;
  constructor() { }

  ngOnInit() {
  }

}
