import { Component, OnInit } from '@angular/core';
import { ExploradorService } from 'src/app/explorador.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countryList$: Observable<any[]>;


  constructor(private exploradorService: ExploradorService) {
    this.countryList$ = this.exploradorService.getCountrys$();
  }

  ngOnInit() {
  }

}
