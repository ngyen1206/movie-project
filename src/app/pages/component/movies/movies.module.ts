import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
