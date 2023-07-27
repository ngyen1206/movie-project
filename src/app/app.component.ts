import { Component, Input, Pipe } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { DataService } from './service/data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText = '';
  searchResults:any = [];
  public loading: boolean = false;
  apiUrl: string = 'https://api.example.com/search';
  @Input()
  public menu = ['Home', 'Movie', 'TV Show'];

  @Input()
  public movie:any = [];

  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]
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
    this.searchResults = this.movie.filter((item:any) => item.original_title.includes(searchTerm));
  }

  async showMovie(){
    const id = this.router.snapshot.paramMap.get('id');
    
    if(id) {
      this.movie = await this.service.getMovie(id)
    };
  }    
  
  public async ngOnInit() {
    this.movie = await this.service.getListMovie();
    console.log(this.movie);
    
  }
}

