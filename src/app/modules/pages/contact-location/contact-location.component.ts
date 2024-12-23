import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-location',
  templateUrl: './contact-location.component.html',
  styleUrl: './contact-location.component.scss'
})
export class ContactLocationComponent {

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: 42.4621742, lng: 18.5132191 },
    zoom: 17, 
  };


}
