import { Component, HostListener, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { DataService } from './service/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public showScrollButton: boolean = false;
  public loading: boolean = false;
  apiUrl: string = 'https://api.example.com/search';
  public navbarOpen: boolean = false;

  

  @Input()
  public movie: any = [];



  constructor(
    private service: DataService,
    private router: ActivatedRoute
  ) { }

  public async ngOnInit() {
    this.movie = await this.service.getListMovie();

  }
  scrollTopPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.showScrollButton = (window.scrollY > 200);
  }
  
}
