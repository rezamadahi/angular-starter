import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import {SharedModule} from "../shared/shared.module";
import {BrowseComponent} from "./browse/browse.component";


@NgModule({
  declarations: [
    BrowseComponent,
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule,
  ]
})
export class BrowseModule { }
