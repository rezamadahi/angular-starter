import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QAComponent} from "./qa/qa.component";

const routes: Routes = [
  {
    path: '',
    component: QAComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QARoutingModule { }
