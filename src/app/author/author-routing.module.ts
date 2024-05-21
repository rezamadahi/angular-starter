import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorDetailsComponent} from "./author-details/author-details.component";

const routes: Routes = [
  {
    path: '',
    component: AuthorsComponent,
  },
  {
    path: 'author/:id',
    component: AuthorDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
