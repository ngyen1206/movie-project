import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent {
  @Input()
  public data: any = [];
  @Input()
  public movie: any = {};
  public key: any='';
  constructor(
    private service: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    router.events.subscribe(data => {
      this.key = this.activatedRoute.snapshot.paramMap.get('key');
    })    
  }
  reloadPage() {
    window.scrollTo(0, 0);
    return;
  }
  async ngOnInit(): Promise<void> {
    // this.loadData();
    this.data = await this.service.getListMovie();
    console.log("search"+this.data.original_title);
    
  }
}
