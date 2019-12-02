import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from 'src/app/explorador.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public oneCountry: string;
  dataCountry$: Observable<any[]>;

  constructor(activatedRoute: ActivatedRoute, private exploradorService: ExploradorService) {
    this.oneCountry = activatedRoute.snapshot.params.countryId;

    this.dataCountry$ = this.exploradorService.getById$(this.oneCountry);
  }
  ngOnInit() {
  }

}
