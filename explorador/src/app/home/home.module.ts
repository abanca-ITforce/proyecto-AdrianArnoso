import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatListModule } from '@angular/material/list';
import { CountryComponent } from './country/country.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':countryId', component: CountryComponent }
];

@NgModule({
  declarations: [HomeComponent, CountryComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule.forChild(routes)
  ],
  exports: [HomeComponent, RouterModule]
})
export class HomeModule { }
