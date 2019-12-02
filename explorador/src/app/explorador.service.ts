import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExploradorService {

  private urlAllCountrys = 'https://api.worldbank.org/v2/country?per_page=1000&format=json';

  countryList: any[];

  constructor(private http: HttpClient) { }

  getCountrys$() {
    return this.http.get<any[]>(this.urlAllCountrys).pipe(map(data => (data[1])));
  }

  getById$(id) {
    return this.http
      .get<any>('https://api.worldbank.org/v2/country/' + id + '?per_page=100&format=json')
      .pipe(map(data => (data[1])));
  }

}

