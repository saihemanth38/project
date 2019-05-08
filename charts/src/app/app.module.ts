import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { DecchartComponent } from './decchart/decchart.component';
import { DecreasemonthlyComponent } from './decreasemonthly/decreasemonthly.component';
import { MonthlygraphComponent } from './monthlygraph/monthlygraph.component';

@NgModule({
  declarations: [
    AppComponent,
    DecchartComponent,
    DecreasemonthlyComponent,
    MonthlygraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
