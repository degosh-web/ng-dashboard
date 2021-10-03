import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () =>
    import('../app/pages/dash-main/dash-main.module').then((m) => m.DashMainModule)
  },
  {
  path: '',
  loadChildren: () =>
    import('../app/pages/dash-weekly/dash-weekly.module').then((m) => m.DashWeeklyModule)
  },

  {
  path: '',
  loadChildren: () =>
    import('../app/pages/home/home.module').then((m) => m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
