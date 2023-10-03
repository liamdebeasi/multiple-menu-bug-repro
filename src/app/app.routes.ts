import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'page-two',
    loadComponent: () =>
      import('./page-two/page-two.page').then((m) => m.PageTwoPage),
  },
  {
    path: 'page-three',
    loadComponent: () =>
      import('./page-three/page-three.page').then((m) => m.PageThreePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

