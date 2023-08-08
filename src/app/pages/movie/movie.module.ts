import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { CardMovieSmallModule } from '../home/components/card-movie-small/card-movie-small.module';
import { CardMovieSmallComponent } from '../home/components/card-movie-small/card-movie-small.component';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    MovieComponent,
    CardMovieSmallComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    //CardMovieSmallModule
  ]
})
export class MovieModule { }
