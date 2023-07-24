import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => (this.isLoggedIn = true)),
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getAuthorizationToken() {
    // this is not used in any real way at the moment
    return 'dummy-token';
  }
}
