import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page-one',
    loadComponent: () => import('./page-one/page-one.page').then((m) => m.PageOnePage),
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
    redirectTo: 'page-one',
    pathMatch: 'full',
  },
];

