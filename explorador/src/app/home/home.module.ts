import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
