import { Component, OnInit } from '@angular/core';
import { Image } from '../carousel/carousel.component';
import * as SnapScroll from '../../../node_modules/angular-snapscroll/dist/angular-snapscroll.min';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css'],
})
export class CharityComponent implements OnInit {
  mainText1 = false;
  mainText2 = false;
  mainText3 = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.mainText1 = true;
    }, 1000)

    setTimeout(() => {
      this.mainText2 = true;
    }, 3000)

    setTimeout(() => {
      this.mainText3 = true;
    }, 4000)
  }

}
