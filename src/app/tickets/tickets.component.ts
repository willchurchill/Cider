import { Component, OnInit, SecurityContext } from '@angular/core';
import { Image } from '../carousel/carousel.component';
import * as SnapScroll from '../../../node_modules/angular-snapscroll/dist/angular-snapscroll.min';
import { DomSanitizer } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements OnInit {

  constructor() {} 

  ngOnInit() {
    
  }

}
