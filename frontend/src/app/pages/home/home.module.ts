import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';
//import { TranslateModule } from '@ngx-translate/core';

import { DashMainModule } from '../dash-main/dash-main.module';
import { DashWeeklyModule } from '../dash-weekly/dash-weekly.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    DashMainModule,
    DashWeeklyModule
  ]
})
export class HomeModule { }
