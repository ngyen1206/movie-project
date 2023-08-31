import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public navbarOpen: boolean = false;
  public showColor = true;
  @Input()
  public movie: any = [];
  window: any;
  public width: number = 0;
  elementRef: any;


  constructor(
    private service: DataService,
    private router: ActivatedRoute
  ) { }
  //Lấy api Movie
  async showMovie() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.movie = await this.service.getMovie(id)
    };
  }

  //xử lí sự kiện thay đổi kích thước màn hình để ẩn/hiện thanh điều hướng navbar
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Xử lý logic khi kích thước thay đổi
    this.width = event.target.innerWidth;
    if (this.width > 1159) {
      this.navbarOpen = false;
    }
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    console.log(this.navbarOpen);
  }
  public async ngOnInit() {
    this.movie = await this.service.getListMovie();
  }
}  
