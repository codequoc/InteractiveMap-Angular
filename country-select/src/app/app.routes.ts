import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { MapInfoComponent } from './map-info/map-info.component';

export const routes: Routes = [
    { path: 'map', component: MapComponent },
    { path: 'mapinfo', component: MapInfoComponent},
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo:'/home', pathMatch:'full'}
];
