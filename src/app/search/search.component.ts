import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public key: any = '';
  public searchTerm: any = '';
  public searchText = '';
  searchResults: any = [];
  public loading: boolean = false;
  private searchSubject: Subject<string> = new Subject<string>();
  @Input()
  public resultSearchMovie: any = [];

  @ViewChild('search') search?: ElementRef;
  @ViewChild('list') list?: ElementRef;
  constructor(
    private service: DataService,
    private router: ActivatedRoute,
    private renderer: Renderer2
  ) {
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(searchTerm => {
      this.performSearch(searchTerm);

    });

    this.renderer.listen('window', 'click', (event: Event) => {
      if (event.target != this.search?.nativeElement && event.target != this.list?.nativeElement) {
        this.loading = false;
      }
    });
  }
  onInputChange(e: any) {
    this.key = e.currentTarget.value;
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
      this.searchResults = this.resultSearchMovie.filter((item: any) =>
        item.original_title.toLowerCase().includes(searchTerm)
      );
    }
  }
  public async ngOnInit() {
    this.resultSearchMovie = await this.service.getListMovie();
  }
  async showMovie() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.resultSearchMovie = await this.service.getMovie(id)
    };
  }
}
