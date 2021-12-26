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

  {
    path: 'curated-for-me',
    loadChildren: () =>
      import('./curated/curated.module').then((m) => m.CuratedModule)
  },

  {
    path: 'account-management',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule)
  },

  {path: '**', redirectTo: '/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
