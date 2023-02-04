import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafico1Component } from './grafico1/grafico1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafico1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafico1Component,
    PagesComponent,
  ]
})
export class PagesModule { }
