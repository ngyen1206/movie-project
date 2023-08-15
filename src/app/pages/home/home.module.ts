import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardComponent } from './components/card/card.component';
import { CardModule } from './components/card/card.module';
import { SlideBannerComponent } from './components/slide-banner/slide-banner.component';
import { SlideBannerModule } from './components/slide-banner/slide-banner.module';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CardMovieSmallModule } from './components/card-movie-small/card-movie-small.module';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    SlideBannerComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCarouselModule,
    CarouselModule,
    CardModule,
    SlideBannerModule,
    CardMovieSmallModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { 
}
