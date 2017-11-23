import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover-image',
  templateUrl: './hover-image.component.html',
  styleUrls: ['./hover-image.component.css']
})
export class HoverImageComponent implements OnInit {
  selectedL = false
  selectedR = false

  constructor() { }

  ngOnInit() {

  }

  left() {
    // alert("muahaha")
    this.selectedL = !(this.selectedL)
  }

  right() {
    // alert("muahaha")
    this.selectedR = !(this.selectedR)
  }

}
