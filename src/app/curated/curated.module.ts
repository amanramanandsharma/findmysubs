import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuratedRoutingModule } from './curated-routing.module';

import { UiElementsModule } from '../ui-elements-exports';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OttMoviesCuratedComponent } from './components/ott-movies-curated/ott-movies-curated.component';


@NgModule({
  declarations: [
    DashboardComponent,
    OttMoviesCuratedComponent
  ],
  imports: [
    CommonModule,
    CuratedRoutingModule,
    UiElementsModule
  ]
})
export class CuratedModule { }
