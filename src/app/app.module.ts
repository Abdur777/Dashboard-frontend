import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { PnLComponent } from './pnl/pnl.component';
import { TopsectionComponent } from './topsection/topsection.component';
import { CurrentplanComponent } from './currentplan/currentplan.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardHeaderComponent,
    ApiCallComponent,
    PnLComponent,
    TopsectionComponent,
    CurrentplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
