import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  


  //getCountryDetails(event: any) {
    //this.countryService.getCountry(event).subscribe((data: any) => {
      //console.log(data);
       //this.countryName = data[1][0].name;
       //this.countryCap = data[1][0].capitalCity;
       //this.countryReg = data[1][0].region.value;
       //this.countryIncome = data[1][0].incomeLevel.value;
       //this.countryISO = data[1][0].iso2Code;
       //this.countryID = data[1][0].id;
    //})
  //}

}
