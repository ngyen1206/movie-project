import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public safeUrl: any;
  public array = [1, 2, 3, 4];
  @Input()
  public poster_path: string = '';
  @Input()
  public original_title: string = '';
  @Input()
  public movie: any = {};

  @Input()
  public movie1: any = {};

  @Input()
  public data: any = {};
  public key_movie: any = '';
  constructor(
    private service: DataService,
    private router: ActivatedRoute,
    private router1: Router,
    private sanitizer: DomSanitizer
  ) {
    router1.events.subscribe(data => {
      console.log(data);
      this.loadData();
      // this.reloadPage();
      // return;
      
    })
  }
  reloadPage(){
    window.location.reload();
    window.scrollTo(0, 0);
    return;
  }

  async ngOnInit(): Promise<void> {
    this.loadData();
    this.data = await this.service.getListMoviesKnowLength(5);
  }

  async loadData() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.movie = await this.service.getMovie(id);
      this.movie1 = await this.service.getVideoMovie(id);
      this.key_movie = this.movie1.results[0].key;
      const unsafeUrl = `https://www.youtube.com/embed/${this.key_movie}`;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
    };
  }
 
}
