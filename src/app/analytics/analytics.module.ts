import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { UiElementsModule } from '../ui-elements-exports';
// Imports for Echarts
import { NgxEchartsModule } from 'ngx-echarts';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OttPlatformComponent } from './components/ott-platform/ott-platform.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OttPlatformComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    UiElementsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ]
})
export class AnalyticsModule { }
