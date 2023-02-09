import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafico1Component } from './grafico1/grafico1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromessaComponent } from './promessa/promessa.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'grafico1',
        component: Grafico1Component,
        data: {
          title: 'Grafico1'
        }
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {
          title: 'Account Settings'
        }
      },
      {
        path: 'promessa',
        component: PromessaComponent,
        data: {
          title: 'Promessa'
        }
      },
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: {
          title: 'Rxjs'
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
