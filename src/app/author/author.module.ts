import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorDetailsComponent} from "./author-details/author-details.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorDetailsComponent,
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule,
  ]
})
export class AuthorModule { }
