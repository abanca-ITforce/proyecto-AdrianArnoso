import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  incomingLevels$: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.incomingLevels$ = this.api.getIncomingLevels();
  }

  ngOnInit() {
  }

  onSearch(search) {
    this.api.onSearch$(search);
  }

}
