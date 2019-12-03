import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { CountriesListComponent } from "./countries-list/countries-list.component";
import { RegionsListComponent } from './regions-list/regions-list.component';

@NgModule({
  declarations: [CountriesListComponent, RegionsListComponent],
  imports: [CommonModule, MatListModule, RouterModule],
  exports: [CountriesListComponent, RegionsListComponent]
})
export class SharedModule {}
