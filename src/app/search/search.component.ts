import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchTerm: string = '';
  public searchText = '';
  searchResults: any = [];
  public loading: boolean = false;
  private searchSubject: Subject<string> = new Subject<string>();
  @Input()
  public resultSearchMovie: any = [];
  public listMovie: any = [];

  //test
  public kq: any;
  public id: any;

  @ViewChild('search') search?: ElementRef;
  @ViewChild('list') list?: ElementRef;
  constructor(
    private service: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2
  ) {
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(searchTerm => {
      this.performSearch();
    });
console.log(this.searchTerm);

    this.renderer.listen('window', 'click', (event: Event) => {
      if (event.target != this.search?.nativeElement && event.target != this.list?.nativeElement) {
        this.loading = false;
      }
    });
  }

  async searchMovie() {
    const newLocal = this;
    this.listMovie = this.service.getSearchResultsListMovie(this.searchTerm);
    // console.log(this.searchTerm);
    // // console.log(this.listMovie.backdrop_path);
    // this.listMovie = await newLocal.service.getSearchResultsListMovie("The Last Voyage of the Demeter");
    // console.log("aaaaa   " + this.listMovie[1].original_title);
  }

  //bat su kien nhap noi dung vao o tim kiem
  onInputChange(event: any) {
    this.searchTerm = event.currentTarget.value.trim().toLowerCase();
    this.searchSubject.next(event.currentTarget.value);
   // console.log(this.searchTerm);

  }
  performSearch() {
    this.searchTerm = this.searchTerm;
    if (!this.searchTerm) {
      this.loading = false;
    }
    else {
      this.loading = true;
      this.searchResults = this.listMovie.filter((item: any) =>
        item.original_title.toLowerCase().includes(this.searchTerm)
      );
      if (this.searchResults.length == 0) {
        this.loading = false;
      }
    }
  }
  public async ngOnInit() {
    this.listMovie = await this.service.getSearchResultsListMovie(this.searchTerm);
    // this.listMovie = await this.service.getSearchResultsListMovie("The Last Voyage of the Demeter");
    // console.log("aaaaa   " + this.listMovie[1].original_title);
    // console.log("aaa");

  }

  searchData() {
    if (!this.searchTerm) {
      return;
    }
    this.router.navigateByUrl('/result-search/' + this.searchTerm);
    this.loading = false;
  }

}          
