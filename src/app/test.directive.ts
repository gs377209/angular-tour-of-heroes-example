import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  @Input() defaultColor: string | undefined;
  @Input() appTest: string | undefined;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'black';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appTest || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('black');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
