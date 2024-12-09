import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent {
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) {
    this.message = this.getMessage();
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = this.authService.redirectUrl;

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true,
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
