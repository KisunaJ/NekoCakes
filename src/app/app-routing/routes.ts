import { Routes } from '@angular/router';

import {homeComponent} from '../home/home.component'


export const routes: Routes=[

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: homeComponent}
]; 