import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';
import { DashMainRoutes } from './dash-main.routes';
//import { TranslateModule } from '@ngx-translate/core';

import { DashMainComponent } from './dash-main.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavComponent } from 'src/app/components/nav/nav.component';

@NgModule({
  declarations: [
    DashMainComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
    NavComponent
  ],
  exports: [
    DashMainComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashMainRoutes)
  ]
})
export class DashMainModule { }
