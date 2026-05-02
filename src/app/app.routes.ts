import { Routes } from '@angular/router';
import { Punto1 } from './features/punto1/punto1';
import { Punto2 } from './features/punto2/punto2';
import { Punto3 } from './features/punto3/punto3';
import { Punto4 } from './features/punto4/punto4';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'punto1',
    pathMatch: 'full',
  },
  {
    path: 'punto1',
    component: Punto1,
    title: 'Punto 1 - Slide Viewer',
  },
  {
    path: 'punto2',
    component: Punto2,
    title: 'Punto 2 - Product Catalog',
  },
  {
    path: 'punto3',
    component: Punto3,
    title: 'Punto 3 - Memory Game',
  },
  {
    path: 'punto4',
    component: Punto4,
    title: 'Punto 4 - Enrollment System',
  },
  {
    path: '**',
    redirectTo: 'punto1',
  }
];
