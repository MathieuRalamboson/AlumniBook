import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlumniComponent } from './alumni/alumni.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AlumniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSlickgridModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
