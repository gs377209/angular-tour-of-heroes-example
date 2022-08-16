import { Injectable, NgModule } from '@angular/core';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
  UrlSegment,
} from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesComponent } from './directives/directives.component';
import { NewDashComponent } from './new-dash/new-dash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  {
    path: 'fun-dashboard-example',
    title: 'Fun Dashboard',
    component: NewDashComponent,
  },
  { path: 'directives', title: 'Directives', component: DirectivesComponent },
  {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@\w+$/gm)) {
        return {
          consumed: url,
          posParams: {
            username: new UrlSegment(url[0].path.slice(1), {}),
          },
        };
      }

      return null;
    },
    title: 'Profile',
    component: ProfileComponent,
  },
  {
    path: 'compose',
    title: 'Compose Message',
    component: ComposeMessageComponent,
    outlet: 'popup',
  },
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
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
