import { Component, OnInit } from '@angular/core';
import { Image } from '../carousel/carousel.component';

@Component({
  selector: 'app-cider',
  templateUrl: './cider.component.html',
  styleUrls: ['./cider.component.css']
})
export class CiderComponent implements OnInit {

  images:Image[] = [
  {name: 0, src:"../../assets/Photos/Generic/image 10.jpg"},
  {name: 1, src:"../../assets/Photos/Generic/chloe-ridgway.jpg"},
  {name: 2, src:"../../assets/Photos/Generic/image 3.jpg"}]
  constructor() { }

  ngOnInit() {
  }

}
