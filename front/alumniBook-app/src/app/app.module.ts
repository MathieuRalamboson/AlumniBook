import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlumniComponent } from './alumni/alumni.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
