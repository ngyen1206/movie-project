import { Component, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { DataService } from './service/data.service';
import { ActivatedRoute } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchResults: any = [];
  public loading: boolean = false;
  apiUrl: string = 'https://api.example.com/search';
  @Input()
  public menu = ['Home', 'Movie', 'TV Show'];

  @Input()
  public movie: any = [];

  private searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private service: DataService,
    private router: ActivatedRoute
  ) {

    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(searchTerm => {
      this.performSearch(searchTerm);
    });
  }

  onInputChange(e: any) {
    this.searchSubject.next(e.currentTarget.value);
  }

  performSearch(searchTerm: string) {
    if (!searchTerm) {
      this.loading = false;
    } else {
      this.loading = true;
      searchTerm = searchTerm.toLocaleLowerCase();
      this.searchResults = this.movie.filter((item: any) => item.original_title.includes(searchTerm));
    }

  }

  async showMovie() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.movie = await this.service.getMovie(id)
    };
    this.loading = false;
    console.log(this.loading);

  }

  public async ngOnInit() {
    this.movie = await this.service.getListMovie();
    console.log(this.movie);

  }
}

