import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorDetailsComponent} from "./author-details/author-details.component";
import {SharedModule} from "../shared/shared.module";
import { AuthorListCardComponent } from './author-list-card/author-list-card.component';


@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorDetailsComponent,
    AuthorListCardComponent,
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule,
  ]
})
export class AuthorModule { }
