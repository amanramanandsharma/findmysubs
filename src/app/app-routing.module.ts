import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },

  {
    path: 'analytics',
    loadChildren: () =>
      import('./analytics/analytics.module').then((m) => m.AnalyticsModule)
  },

  {path: '**', redirectTo: '/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
