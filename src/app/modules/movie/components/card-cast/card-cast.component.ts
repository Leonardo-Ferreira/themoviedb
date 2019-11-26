import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cast } from 'src/app/core/models/cast.model';

@Component({
  selector: 'app-card-cast',
  templateUrl: './card-cast.component.html',
  styleUrls: ['./card-cast.component.css']
})
export class CardCastComponent implements OnInit {

  @Input() cast: Cast;
  imageURL = environment.BASE_URL_IMAGE;
  imgDefault = environment.IMG_DEFAULT;

  constructor() { }

  ngOnInit() {
  }
}
