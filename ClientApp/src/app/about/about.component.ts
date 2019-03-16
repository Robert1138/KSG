import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pdfSrc: string = '/assets/test1PDF.pdf';


  constructor() { }

  ngOnInit() {
  }

}
