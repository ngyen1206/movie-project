import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import axios from 'axios';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  @Input()
  public data = [];

  @Input()
  public title: string = '';

  @Input()
  customOptions: OwlOptions = {}

  public async ngOnInit() {

  }
}
