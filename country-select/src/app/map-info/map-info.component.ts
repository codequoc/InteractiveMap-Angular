import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-map-info',
  imports: [ MapComponent ],
  templateUrl: './map-info.component.html',
  styleUrl: './map-info.component.css'
})
export class MapInfoComponent {

  constructor(private countryService: CountryService) {}

  countryName = "";
  countryCap = "";
  countryReg = "";
  countryIncome = "";
  countryISO = "";
  countryID = "";

  showName($event: any) {
    this.countryName = $event;
  }

  showCapital($event: any) {
    this.countryCap = $event;
  }

  showRegion($event: any) {
    this.countryReg = $event;
  }

  showIncome($event: any) {
    this.countryIncome = $event;
  }

  showISO($event: any) {
    this.countryISO = $event;
  }

  showID($event: any) {
    this.countryID = $event;
  }

}
