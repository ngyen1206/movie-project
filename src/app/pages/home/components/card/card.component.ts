import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  public data = [];

  @Input()
  public title: string = '';

  @Input()
  customOptions: OwlOptions = {}

}
