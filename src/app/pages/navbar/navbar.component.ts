import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public searchTerm: any = '';
  public searchText = '';
  searchResults: any = [];
  public loading: boolean = false;
  private searchSubject: Subject<string> = new Subject<string>();
  @Input()
  public movie: any = [];
window: any;

  constructor(
    private service: DataService,
    private router: ActivatedRoute
  ) {
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(searchTerm => {
      console.log(searchTerm);
      this.performSearch(searchTerm);
    });
  }

  public async ngOnInit() {
    this.movie = await this.service.getListMovie();
  }
  onInputChange(e: any) {
    this.searchSubject.next(e.currentTarget.value);
  }

  performSearch(searchTerm: string) {
    searchTerm = searchTerm.trim().toLowerCase();
    if (!searchTerm) {
      this.searchResults = [];
      this.loading = false;
    }
    else {
      this.loading = true;
      this.searchResults = this.movie.filter((item: any) =>
        item.original_title.toLowerCase().includes(searchTerm)
      );
    }
  }

  async showMovie() {
    const id = this.router.snapshot.paramMap.get('id');
      if (id) {
        this.movie = await this.service.getMovie(id)
      };
    }
  }  
