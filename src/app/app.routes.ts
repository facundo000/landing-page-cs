import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: HeaderComponent },
];
