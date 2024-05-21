import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authors',
    loadChildren: () => import('./author/author.module').then(m => m.AuthorModule),
  },
  {
    path: 'browse',
    loadChildren: () => import('./browse/browse.module').then(m => m.BrowseModule),
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule),
  },
  {
    path: 'qa',
    loadChildren: () => import('./qa/qa.module').then(m => m.QAModule),
  },
  {
    path: '',
    redirectTo: '/authors',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
