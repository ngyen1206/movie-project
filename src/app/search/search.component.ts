import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { keyValuesToMap } from '@angular/flex-layout/extended/style/style-transforms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
 
  // public searchText: string = '';
  // public listSearchResults: any = [];
  // private searchSubject: Subject<string> = new Subject<string>();

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

// constructor(){
//   this.searchSubject.pipe(debounceTime(500)).subscribe(searchText => {
//     this.performSearch();
//   });
// }

//   //bat su kien nhap noi dung vao o tim kiem
//   onInputChange(event: any) {
//       this.searchText = event.currentTarget.value.trim().toLowerCase();
//       this.searchSubject.next(event.currentTarget.value);
//       console.log(this.searchText);
      
//     }
// performSearch(){
//   console.log("1");
  
// }



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


    this.renderer.listen('window', 'click', (event: Event) => {
      if (event.target != this.search?.nativeElement && event.target != this.list?.nativeElement) {
        this.loading = false;
      }
    });
  }

  searchMovie() {
    this.listMovie = this.service.getSearchResultsListMovie(this.searchTerm);
    console.log(this.searchTerm);
    console.log(this.listMovie);


  }
  onInputChange(e: any) {
    this.searchTerm = e.currentTarget.value.trim().toLowerCase();
    this.searchSubject.next(e.currentTarget.value);
  }
  performSearch() {
    const searchTerm = this.searchTerm;
    if (!searchTerm) {
      this.loading = false;
    }
    else {
      this.loading = true;
      this.searchResults = this.listMovie.filter((item: any) =>
        item.original_title.toLowerCase().includes(searchTerm)
      );

      if (this.searchResults.length == 0) {
        this.loading = false;
      }
    }
  }
  public async ngOnInit() {
    this.listMovie = await this.service.getSearchResultsListMovie(this.searchTerm);
    console.log(this.listMovie);
  }

  searchData() {
    if (!this.searchTerm) {
      return;
    }
    this.router.navigateByUrl('/result-search/' + this.searchTerm);
    this.loading = false;
  }

}          
