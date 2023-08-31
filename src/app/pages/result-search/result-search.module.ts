import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultSearchComponent } from './result-search.component';
import { ResultSearchRoutingModule } from './result-search-routing.module';
import { CardModule } from '../home/components/card/card.module';
import { CardMovieSmallModule } from '../home/components/card-movie-small/card-movie-small.module';



@NgModule({
  declarations: [
    ResultSearchComponent
  ],
  imports: [
    CommonModule,
    ResultSearchRoutingModule,
    CardMovieSmallModule
  ]
})
export class ResultSearchModule { }
