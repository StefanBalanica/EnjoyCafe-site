import {Routes} from '@angular/router'

export const routes: Routes = [
  {path: '', redirectTo: 'enjoy', pathMatch: 'full'},
  {
    path: 'enjoy',
    loadComponent: () => import('./features/enjoy/enjoy.component').then(c => c.EnjoyComponent)
  }
];