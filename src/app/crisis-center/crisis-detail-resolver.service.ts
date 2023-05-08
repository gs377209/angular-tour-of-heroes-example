import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService {
  constructor(private cs: CrisisService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Crisis> | Observable<never> {
    const id = parseInt(route.paramMap.get('id') ?? '', 10);

    return this.cs.getCrisis(id).pipe(
      mergeMap((crisis) => {
        if (crisis) {
          return of(crisis);
        } else {
          // id not found
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
