import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountry(countryId: string): Observable<any> {
    return this.http.get(`https://api.worldbank.org/V2/country/${countryId}?format=json`)
  }

  printCountry(countryId: string): Observable<any> {
    return this.http.get(`https://api.worldbank.org/V2/country/${countryId}?format=json`)
  }
}
