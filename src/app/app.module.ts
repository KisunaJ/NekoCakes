import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import 'hammerjs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
