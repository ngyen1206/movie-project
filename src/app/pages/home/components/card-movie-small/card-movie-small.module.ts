import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMovieSmallComponent } from './card-movie-small.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   CardMovieSmallComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardMovieSmallComponent
  ]
})
export class CardMovieSmallModule { }
