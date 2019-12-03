import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CountryCardComponent } from "./country-card/country-card.component";
import { CountryRoutingModule } from "./country-routing.module";
import { CountryComponent } from "./country.component";

@NgModule({
  declarations: [CountryComponent, CountryCardComponent],
  imports: [CommonModule, CountryRoutingModule, MatCardModule]
})
export class CountryModule {}
