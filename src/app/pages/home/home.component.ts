import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
    autoWidth: true,
    startPosition: 0,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false
  }

  public async ngOnInit() {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzhhNGI2NWM5ZTI4YjBhOWZlNzlmMjZmZGM0YTEzNiIsInN1YiI6IjY0YjdhY2ZlZWVlMTg2MDBhZWQ5MTRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-2W0CNApDPv2Vr3KPjtfdlpzYH2WrBgRUOpc8-a5WF0'
      }
    };

    this.data = await axios
      .request(options)
      .then(function (response: { data: any; }) {
        const id = response.data.results.id;
        // console.log(response.data.results);
        // console.log(response.data.results.backdrop_path);          
        return response.data.results;
      })
      .catch(function (error: any) {
        console.error(error);
      });
    console.log(this.data);

  }
}
