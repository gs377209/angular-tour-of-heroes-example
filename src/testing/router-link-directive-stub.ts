import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[routerLink]',
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: unknown;
  navigatedTo: unknown = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
