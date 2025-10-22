import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Enjoy Cafe — Acasă'
  },
  {
    path: 'meniu',
    loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent),
    title: 'Enjoy Cafe — Meniu'
  },
  {
    path: 'despre',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'Enjoy Cafe — Despre'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Enjoy Cafe — Contact'
  },
  {
    path: 'crazy-bubble',
    loadComponent: () => import('./pages/crazy-bubble/crazy-bubble.component').then(m => m.CrazyBubbleComponent),
    title: 'Enjoy Cafe — Crazy Bubble'
  },
  {
    path: 'login',
    loadChildren: () => import('./admin/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
