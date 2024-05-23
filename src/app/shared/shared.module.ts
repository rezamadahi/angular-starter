import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ImageUploaderComponent} from "./image-uploader/image-uploader.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    ImageUploaderComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    ImageUploaderComponent,
  ]
})
export class SharedModule { }
