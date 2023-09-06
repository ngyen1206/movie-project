import { Component, Input } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';

@UntilDestroy()
@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent {
  public preformSearch: any = [];
  public movie: any = {};
  public key: any = '';
  constructor(
    private service: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    router.events.pipe(
      untilDestroyed(this),
      filter(event => event instanceof NavigationEnd )
    ).subscribe(data => {
      this.key = this.activatedRoute.snapshot.paramMap.get('key');
      this.loadData();
    })
  }
  reloadPage() {
    window.scrollTo(0, 0);
    return;
  }
  async ngOnInit(): Promise<void> {
    this.loadData();
  }

  async loadData() {
    const data = await this.service.getListMovie();
      this.preformSearch = data.filter((item: any) => item.original_title.toLowerCase().includes(this.key.toLowerCase()));
  }
}
