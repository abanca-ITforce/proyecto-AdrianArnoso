import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})

export class FormFilterComponent {
  @Input() incomes;

  @Output() search = new EventEmitter<any>();


  formFilter = this.fb.group({
    incomes: [null, []],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.search.emit(this.formFilter.value);
  }
}
