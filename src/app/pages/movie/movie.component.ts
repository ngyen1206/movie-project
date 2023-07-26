import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent  implements OnInit {
  public tilte = ['Overview','Popularity','Vote Average'];

  @Input()
  public movie: any = {};
  constructor(
    private service: DataService,
    private router: ActivatedRoute,
  ) {
    
  }

  async ngOnInit(): Promise<void> {
    const id = this.router.snapshot.paramMap.get('id');
    
    if(id) {
      this.movie = await this.service.getMovie(id)
    };
  }

}
