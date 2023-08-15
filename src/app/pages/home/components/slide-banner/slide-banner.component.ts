import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slide-banner',
  templateUrl: './slide-banner.component.html',
  styleUrls: ['./slide-banner.component.scss']
})
export class SlideBannerComponent {
  public array = [1, 2, 3, 4, 5, 6];

  public a = false;
  @Input()
  public data = [];

  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    dots: false,
    autoplay: false,
    navText: [
      '<i class="fa-solid fa-angle-left fa-2xl"></i>',
      '<i class="fa-solid fa-angle-right fa-2xl"></i>'
    ],
    nav: true
  }
  async watchTrailer() {
    console.log("abc");

  }
}
