import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('fileInput', {static: true}) fileInput: ElementRef; 
  openBrowser (): void {
    this.fileInput.nativeElement.click();
  }
  constructor() { }

  ngOnInit() {
  }

}
