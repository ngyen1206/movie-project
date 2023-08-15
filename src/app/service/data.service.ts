import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzhhNGI2NWM5ZTI4YjBhOWZlNzlmMjZmZGM0YTEzNiIsInN1YiI6IjY0YjdhY2ZlZWVlMTg2MDBhZWQ5MTRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-2W0CNApDPv2Vr3KPjtfdlpzYH2WrBgRUOpc8-a5WF0';
  private accept= 'application/json';

  public async getListMoviesKnowLength(index: any) {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      headers: {
        accept: this.accept,
        Authorization: this.authorization
      },
    };
    return await axios.request(options).then(function (response: { data: any; }) {
      const result = response.data.results;
      result.length = index;
      return result;
      // return response.data.results.length;
    }).catch(function(error){
      console.error(error);
    });
  }
  public async getListMovie() {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      headers: {
        accept: this.accept,
        Authorization: this.authorization
      },
    };
    return await axios.request(options).then(function (response: { data: any; }) {
       return response.data.results;
    }).catch(function(error){
      console.error(error);
    });
  }

  public async getMovie($idMovie: string) {
    const options = {
      method: 'GET',
       url:'https://api.themoviedb.org/3/movie/'+$idMovie,
      headers: {
        accept: this.accept,
        Authorization: this.authorization
      },
    };
    return await axios.request(options).then(function (response: { data: any; }) {
      return response.data;
    }).catch(function(error){
      console.error(error);
    });
  }

  public async getSearchResultsListMovie($tilteMovie: string){
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/movie?query=${$tilteMovie}`,
      headers: {
        accept: this.accept,
        Authorization: this.authorization
      },
    };
    return await axios.request(options).then(function (response: { data: any; }) {
      return response.data;
    }).catch(function(error){
      console.error(error);
    });
  }

  public async getVideoMovie($idMovie: string){
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${$idMovie}/videos?language=en-US`,
      headers: {
        accept: this.accept,
        Authorization: this.authorization
      }
    };
    return await axios.request(options).then(function (response: { data: any; }) {
      return response.data;
    }).catch(function(error){
      console.error(error);
    });
  }
}

