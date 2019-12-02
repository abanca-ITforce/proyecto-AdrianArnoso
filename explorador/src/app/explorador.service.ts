import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExploradorService {
  private url = 'https://api.worldbank.org/v2/country?per_page=1000&format=json';
  countryList: any[];

  constructor(private http: HttpClient) { }

  getCountrys$() {
    return this.http.get<any[]>(this.url).pipe(map(data => (data[1])));
  }

  getById$(id) {
    return this.http
      .get<any>(this.url + '/' + id)
      .pipe(map(data => (data ? data : {})));
  }

  pruebaService(){
    console.log('Esto esta dentro del service');
  }


}

