import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component'
import { ProductosComponent } from '../productos/productos.component';


export const routes: Routes=[

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent}

]; 