import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { RegionCardComponent } from "./region-card/region-card.component";
import { RegionRoutingModule } from "./region-routing.module";
import { RegionComponent } from "./region.component";
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RegionComponent, RegionCardComponent],
  imports: [CommonModule, RegionRoutingModule, MatCardModule, SharedModule]
})
export class RegionModule {}
