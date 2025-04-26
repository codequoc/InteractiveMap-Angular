import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  constructor(private countryService: CountryService) {}

  countryName = "";
  countryCap = "";
  countryReg = "";
  countryIncome = "";
  countryISO = "";
  countryID = "";

  getCountryDetails(event: any) {
    this.countryService.getCountry(event).subscribe((data: any) => {
       this.countryName = data[1][0].name;
       this.countryCap = data[1][0].capitalCity;
       this.countryReg = data[1][0].region.value;
       this.countryIncome = data[1][0].incomeLevel.value;
       this.countryISO = data[1][0].iso2Code;
       this.countryID = data[1][0].id;
    })
  }

  
  ngOnInit(): void {
    
  }
}
