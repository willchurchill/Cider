import { Component, OnInit } from '@angular/core';
import { Image } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainText1 = false;
  mainText2 = false;
  mainText3 = false;
  images1:Image[] = [
  {name: 0, src:"../../assets/Photos/Generic/image 10.jpg"},
  {name: 1, src:"../../assets/Photos/Generic/chloe-ridgway.jpg"},
  {name: 2, src:"../../assets/Photos/Generic/image 3.jpg"},
  {name: 3, src:"../../assets/Photos/Generic/image 9.jpg"}]
  images2:Image[] = [
  {name: 0, src:"../../assets/Photos/Generic/image 6.jpg"},
  {name: 1, src:"../../assets/Photos/Generic/image 4.jpg"},
  {name: 2, src:"../../assets/Photos/Generic/bruno-nascimento.jpg"}]

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
