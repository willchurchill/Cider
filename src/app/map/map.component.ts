import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
//     mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhd2ttIiwiYSI6ImNqM3o3emRzbzAwY28zMW41NnJkcnlyc3oifQ.M_UwGN_kUOOScXtqTs6vSA';
//
//     var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v10',
//     zoom: 13,
//     center: [-2.644943, 51.21397]
//     });
//
//     map.on('load', function () {
//       // Add a layer showing the places.
//       map.addLayer({
//           "id": "places",
//           "type": "symbol",
//           "source": {
//               "type": "geojson",
//               "data": {
//                   "type": "FeatureCollection",
//                   "features": [{
//                       "type": "Feature",
//                       "properties": {
//                           "description": "<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
//                           "icon": "monument"
//                       },
//                       "geometry": {
//                           "type": "Point",
//                           "coordinates": [-2.644943, 51.21397]
//                       }
//                   }]
//               }
//           },
//           "layout": {
//               "icon-image": "{icon}-15",
//               "icon-allow-overlap": true
//           }
//       });
//
//       // When a click event occurs on a feature in the places layer, open a popup at the
//       // location of the feature, with description HTML from its properties.
//       map.on('click', 'places', function (e) {
//           new mapboxgl.Popup()
//               .setLngLat(e.features[0].geometry.coordinates)
//               .setHTML(e.features[0].properties.description)
//               .addTo(map);
//       });
//
//       // Change the cursor to a pointer when the mouse is over the places layer.
//       map.on('mouseenter', 'places', function () {
//           map.getCanvas().style.cursor = 'pointer';
//       });
//
//       // Change it back to a pointer when it leaves.
//       map.on('mouseleave', 'places', function () {
//           map.getCanvas().style.cursor = '';
//       });
//   });
//   }
//
//
//
// }
