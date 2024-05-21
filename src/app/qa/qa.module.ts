import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QARoutingModule } from './qa-routing.module';
import {SharedModule} from "../shared/shared.module";
import {QAComponent} from "./qa/qa.component";


@NgModule({
  declarations: [
    QAComponent,
  ],
  imports: [
    CommonModule,
    QARoutingModule,
    SharedModule,
  ]
})
export class QAModule { }
