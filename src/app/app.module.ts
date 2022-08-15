import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import {
  ScreenTrackingService,
  UserTrackingService,
  getAnalytics,
  provideAnalytics,
} from '@angular/fire/analytics';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import {
  getRemoteConfig,
  provideRemoteConfig,
} from '@angular/fire/remote-config';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesComponent } from './directives/directives.component';
import { HeroAddressFormComponent } from './hero-address-form/hero-address-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HighlightDirective } from './highlight.directive';
import { InMemoryDataService } from './in-memory-data.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessagesComponent } from './messages/messages.component';
import { NewDashComponent } from './new-dash/new-dash.component';
import { NewNavComponent } from './new-nav/new-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UnlessDirective } from './unless.directive';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroAddressFormComponent,
    NewNavComponent,
    NewDashComponent,
    HighlightDirective,
    DirectivesComponent,
    UnlessDirective,
    PageNotFoundComponent,
    CrisisListComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
