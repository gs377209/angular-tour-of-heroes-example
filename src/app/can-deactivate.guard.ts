import { UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard {
  canDeactivate(
    component: CanComponentDeactivate,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // component-specific:
    // // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    // if (!component.crisis || component.crisis.name === component.editName) {
    //   return true;
    // }
    // // Otherwise ask the user with the dialog service and return its
    // // observable which resolves to true or false when the user decides
    // return component.dialogService.confirm('Discard changes?');

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
