import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data = [];
  public array = [1, 2, 3];

  constructor(
    public service: DataService
  ) {
  }
  public async ngOnInit() {
    this.data = await this.service.getListMoviesKnowLength(4);
  }

  scrollTopPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
