import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { CountdownComponent } from './countdown/countdown.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CharityComponent } from './charity/charity.component';
import { CiderComponent } from './cider/cider.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { HoverImageComponent } from './hover-image/hover-image.component';
import { NavstubComponent } from './navstub/navstub.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CountdownComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    CharityComponent,
    CiderComponent,
    TicketsComponent,
    AboutComponent,
    CarouselComponent,
    GalleryComponent,
    FooterComponent,
    HoverImageComponent,
    NavstubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'charity',
        component: CharityComponent
      },
      {
        path: 'cider',
        component: CiderComponent
      },
      {
        path: 'tickets',
        component: TicketsComponent
      },
      {
        path: 'route',
        component: MapComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
