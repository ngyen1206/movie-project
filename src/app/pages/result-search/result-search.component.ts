import { Component } from '@angular/core';
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
  public listSearch: any = [];
  public movie: any = {};
  public key: any = '';

  constructor(
    private service: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    //khi chuyển trang thành công sẽ gán lấy giá trị key trên url và load lại dữ liệu
    router.events.pipe(
      untilDestroyed(this),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(listSearch => {
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
    this.listSearch = await this.service.getSearchResultsListMovie(this.key);
  }
}
