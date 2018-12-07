import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageContComponent } from './containers/main-cont/main-cont.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageContComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgSelectModule,
    FormsModule
  ]
})
export class HomePageModule { }
