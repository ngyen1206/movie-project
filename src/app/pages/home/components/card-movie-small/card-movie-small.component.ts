import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movie-small',
  templateUrl: './card-movie-small.component.html',
  styleUrls: ['./card-movie-small.component.scss']
})
export class CardMovieSmallComponent{
  @Input()
  public poster_path: string = '';
  @Input()
  public original_title: string = '';
  @Input()
  public id: string = '';
}
