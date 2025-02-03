/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
import '@angular/platform-server/init';

/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
// import '@angular/localize/init'; - removed based on build log

import { enableProdMode } from '@angular/core';

import { AppServerModule } from './app/app.server.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export default AppServerModule;
