import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';

import {ServingService} from './serving.service';
import { LineChartComponent } from './line-chart/line-chart.component'
@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LineChartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
