import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesComponent } from './directives/directives.component';
import { HeroAddressFormComponent } from './hero-address-form/hero-address-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NewDashComponent } from './new-dash/new-dash.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'shipping-address-form', component: HeroAddressFormComponent },
  { path: 'fun-dashboard-example', component: NewDashComponent },
  { path: 'directives', component: DirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
