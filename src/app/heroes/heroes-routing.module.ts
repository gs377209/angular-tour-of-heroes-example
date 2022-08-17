import { RouterModule, Routes } from '@angular/router';
import { HeroAddressFormComponent } from './hero-address-form/hero-address-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'hero/:id', redirectTo: '/superhero/:id' },
  {
    path: 'superheroes',
    title: 'Heroes',
    component: HeroListComponent,
    data: { animation: 'heroes' },
  },
  {
    path: 'superhero/:id',
    title: 'Hero Detail',
    component: HeroDetailComponent,
    data: { animation: 'hero' },
  },
  {
    path: 'shipping-address-form',
    title: 'Shipping Address Form',
    component: HeroAddressFormComponent,
  },
  { path: 'hero-form', title: 'Hero Form', component: HeroFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
