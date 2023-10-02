import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'compose',
    title: 'Compose Message',
    component: ComposeMessageComponent,
    outlet: 'popup',
    data: { animation: 'compose' },
  },
  {
    path: 'superheroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
    data: { preload: true, animation: 'superheroes' },
  },
  {
    path: 'crisis-center',
    loadChildren: () =>
      import('./crisis-center/crisis-center.module').then(
        (m) => m.CrisisCenterModule,
      ),
    data: { preload: true, animation: 'crisisCenter' },
  },
  {
    path: 'one-off-items',
    loadChildren: () =>
      import('./one-off-items/one-off-items.module').then(
        (m) => m.OneOffItemsModule,
      ),
    data: { animation: 'oneOffItems' },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canMatch: [AuthGuard],
    data: { animation: 'admin' },
  },
  {
    path: '',
    redirectTo: 'superheroes/dashboard',
    pathMatch: 'full',
    data: { animation: 'heroDashboard' },
  },
  {
    path: 'animations',
    loadChildren: () =>
      import('./animations/animations.module').then((m) => m.AnimationsModule),
    data: { animation: 'animations' },
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
    data: { animation: 'book' },
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: PageNotFoundComponent,
    data: { animation: 'pageNotFound' },
  },
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
    } else {
      this.title.setTitle('Angular Tour of Heroes Example');
    }
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
