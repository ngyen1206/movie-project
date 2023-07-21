import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root' // Đảm bảo service có sẵn ở cấp ứng dụng (root level)
})
export class DataService {
  public data = [];
  public getData() {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzhhNGI2NWM5ZTI4YjBhOWZlNzlmMjZmZGM0YTEzNiIsInN1YiI6IjY0YjdhY2ZlZWVlMTg2MDBhZWQ5MTRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-2W0CNApDPv2Vr3KPjtfdlpzYH2WrBgRUOpc8-a5WF0'
      }
    };

    axios
      .request(options)
      .then(function (response: { data: any; }) { 
        const id = response.data.results.id;     
          console.log(response.data.results);
          console.log(response.data.results.backdrop_path);          
        return response.data.results;
      })
      .catch(function (error: any) {
        console.error(error);
      });
      console.log(this.data);
  }
}
