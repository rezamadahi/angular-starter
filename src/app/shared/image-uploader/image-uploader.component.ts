import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css',
})
export class ImageUploaderComponent {

  @Output() imageSelected = new EventEmitter<string>();
  imageUrl: string | ArrayBuffer | null = null;

  constructor() {
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result;
      this.imageSelected.emit(this.imageUrl as string);
    };
  }

}
