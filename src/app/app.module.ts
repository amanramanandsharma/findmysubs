import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

registerLocaleData(en);

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { UiElementsModule } from './ui-elements-exports';
// Imports for Echarts
import { NgxEchartsModule } from 'ngx-echarts';


import { HomeComponent } from './home/home.component';
import { OttCardsComponent } from './home/ott-cards/ott-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OttCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    UiElementsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
