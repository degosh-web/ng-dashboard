import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashWeeklyComponent } from './dash-weekly.component';
import { DashWeeklyRoutes } from './dash-weekly.routes';
//import { TranslateModule } from '@ngx-translate/core';

import { DashMainModule } from '../dash-main/dash-main.module';

@NgModule({
  declarations: [DashWeeklyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashWeeklyRoutes),
    DashMainModule
  ]
})
export class DashWeeklyModule { }

