import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';



@Injectable()
export class MapServiceService {

  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhd2ttIiwiYSI6ImNqM3o3emRzbzAwY28zMW41NnJkcnlyc3oifQ.M_UwGN_kUOOScXtqTs6vSA';
  }

}
