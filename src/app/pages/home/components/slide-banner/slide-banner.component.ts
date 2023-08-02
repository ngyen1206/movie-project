import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-banner',
  templateUrl: './slide-banner.component.html',
  styleUrls: ['./slide-banner.component.scss']
})
export class SlideBannerComponent {
  public array = [1, 2, 3, 4, 5, 6];

  @Input()
  public data =[];
}
