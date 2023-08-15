import { Component, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { DataService } from './service/data.service';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public loading: boolean = false;
  apiUrl: string = 'https://api.example.com/search';
  @Input()
  public menu = ['Home', 'Movie', 'TV Show'];

  @Input()
  public movie: any = [];



  constructor(
    private service: DataService,
    private router: ActivatedRoute
  ) {

  }

  public async ngOnInit() {
    this.movie = await this.service.getListMovie();
    console.log(this.movie);

  }
}

// <nz-layout>
//     <app-navbar></app-navbar>
//     <nz-content class="_br-color">
//         <router-outlet></router-outlet>
//     </nz-content>
//     <app-footer></app-footer>
// </nz-layout>
