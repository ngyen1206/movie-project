import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'movie', loadChildren: () => import('./pages/movie/movie.module').then(m => m.MovieModule)},
  { path: 'result-search', loadChildren: () => import('./pages/result-search/result-search.module').then(m => m.ResultSearchModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
