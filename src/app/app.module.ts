import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import 'hammerjs';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import{IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserModule,    
    MatButtonModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
