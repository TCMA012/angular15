import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(mod => mod.DashboardComponent)
  },
  {
    path: 'heroes',
    loadComponent: () => import('./hero-list/hero-list.component')
      .then(mod => mod.HeroListComponent)
  },
  {
    path: 'hero/:id',
    loadComponent: () => import('./hero/hero.component')
      .then(mod => mod.HeroComponent)
  }
];
