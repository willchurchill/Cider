import { Component, OnInit } from '@angular/core';
import { Image } from '../carousel/carousel.component';
import * as SnapScroll from '../../../node_modules/angular-snapscroll/dist/angular-snapscroll.min';

@Component({
  selector: 'app-cider',
  templateUrl: './cider.component.html',
  styleUrls: ['./cider.component.css'],
})
export class CiderComponent implements OnInit {
  mainText1 = false;
  mainText2 = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.mainText1 = true;
    }, 1000)

    setTimeout(() => {
      this.mainText2 = true;
    }, 3000)
  }

}
