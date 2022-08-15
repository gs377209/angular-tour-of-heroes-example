import { Injectable, NgModule } from '@angular/core';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesComponent } from './directives/directives.component';
import { HeroAddressFormComponent } from './hero-address-form/hero-address-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NewDashComponent } from './new-dash/new-dash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  {
    path: 'heroes',
    title: 'Heroes',
    component: HeroesComponent,
  },
  { path: 'detail/:id', title: 'Hero Detail', component: HeroDetailComponent },
  {
    path: 'shipping-address-form',
    title: 'Shipping Address Form',
    component: HeroAddressFormComponent,
  },
  {
    path: 'fun-dashboard-example',
    title: 'Fun Dashboard',
    component: NewDashComponent,
  },
  { path: 'directives', title: 'Directives', component: DirectivesComponent },
  { path: 'crisis-list', title: 'Crisis List', component: CrisisListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Angular Tour of Heroes Example | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
