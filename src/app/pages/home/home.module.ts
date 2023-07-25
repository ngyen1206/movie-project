import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MoviesModule } from '../component/movies/movies.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCarouselModule,
    CarouselModule,
    MoviesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { 
}
