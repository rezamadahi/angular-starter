import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'authors',
    loadChildren: () => import('./author/author.module').then(m => m.AuthorModule),
  },
  {
    path: 'qa',
    loadChildren: () => import('./qa/qa.module').then(m => m.QAModule),
  },
  {
    path: '',
    redirectTo: '/home', 
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
