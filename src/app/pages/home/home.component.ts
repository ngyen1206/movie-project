import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public id: string = '';
  public backdrop_path: string = '';
  public data = [];
  public array = [1, 2, 3, 4, 5, 6];

  customOptions: OwlOptions = {
    items: 6,
    autoWidth: false,
    startPosition: 0,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false
  }

  constructor(
    public service: DataService
  ){
  }
  public async ngOnInit() {
    this.data = await this.service.getListMovie();
    //console.log(this.data);
  }
}
