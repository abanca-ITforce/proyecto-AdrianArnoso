import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPointCountries = 'https://api.worldbank.org/v2/country';
  private format = '?per_page=1000&format=json';
  private urlRegions  = 'https://api.worldbank.org/v2/region/?format=json';
  private endPointRegion = 'https://api.worldbank.org/v2/country?region=';




  constructor(private httpClient: HttpClient) {}

  getAllCountries$() {
    const url = this.endPointCountries + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getCountryById$(countryId) {
    const url = this.endPointCountries + '/' + countryId + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }

  getAllRegions$() {
    const url = this.urlRegions;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getRegionByCode$(regionCode) {
    const url = this.endPointRegion + regionCode + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][1]));
  }

  getCountriesByRegionCode$(regionCode) {
    const url = this.endPointRegion + '/' + regionCode + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }
}