import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Rx';

export interface Image {
  name: number,
  src:string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  selectedImage = 1
  add=false
  @Input() images : Image[]
  @Input() text : String
  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(3000,4000);
    timer.subscribe(t=> {
        this.next()
    });
  }

  onSelect(image) {
    this.selectedImage = image.name;
  }

  adder() {
    this.add = !this.add;
  }

  next() {
    this.selectedImage = (this.selectedImage + 1) % this.images.length;
  }

}
