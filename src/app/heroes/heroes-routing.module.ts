import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    title: 'Heroes',
    component: HeroesComponent,
    data: { animation: 'heroes' },
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        component: DashboardComponent,
        data: { animation: 'heroDashboard' },
      },
      {
        path: 'hero-form',
        title: 'Hero Form',
        component: HeroFormComponent,
        data: { animation: 'heroForm' },
      },
      {
        path: '',
        title: 'Heroes',
        component: HeroListComponent,
        data: { animation: 'heroes' },
      },
      {
        path: ':id',
        title: 'Hero Detail',
        component: HeroDetailComponent,
        data: { animation: 'hero' },
      },
      {
        path: 'heroes',
        redirectTo: '/superheroes',
        data: { animation: 'heroes' },
      },
      { path: 'hero/:id', redirectTo: '/:id', data: { animation: 'hero' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
