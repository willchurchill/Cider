import { Component, OnInit } from '@angular/core';
import { Image } from '../carousel/carousel.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  images1: Image[] = [{name: 0, src: "../../assets/Photos/Generic/jenny-hill-1.jpg"}]
  images2: Image[] = [{name: 0, src: "../../assets/Photos/Generic/jenny-hill-2.jpg"}]
  constructor() { }

  ngOnInit() {
  }

}
