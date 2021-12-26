import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { UiElementsModule } from '../ui-elements-exports';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OttManagementComponent } from './components/ott-management/ott-management.component';


@NgModule({
  declarations: [
    DashboardComponent,
    OttManagementComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    UiElementsModule
  ]
})
export class AccountModule { }
