import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RegionsComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    SharedModule
  ]
})
export class RegionsModule { }
