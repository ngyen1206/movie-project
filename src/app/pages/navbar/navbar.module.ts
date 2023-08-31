import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchModule } from 'src/app/search/search.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    FormsModule,
    RouterModule,
    SearchModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
