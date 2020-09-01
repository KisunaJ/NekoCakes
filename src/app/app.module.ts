import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import 'hammerjs';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductosComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserModule,    
    MatButtonModule,
    IvyCarouselModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
