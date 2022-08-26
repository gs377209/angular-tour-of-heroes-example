import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  @Component({
    template: ` <h2 appHighlight="yellow">Something Yellow</h2>
      <h2 appHighlight>The Default (Black)</h2>
      <h2>No Highlight</h2>
      <input #box [appHighlight]="box.value" value="cyan" />`,
  })
  class TestComponent {}

  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];
  let bareH2: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));

    // the h2 without the HighlightDirective
    bareH2 = fixture.debugElement.query(By.css('h2:not([appHighlight])'));
  });

  // color tests
  it('should have three highlighted elements', () => {
    expect(des.length).toBe(3);
  });

  it('should color 1st <h2> background "yellow"', () => {
    des[0].nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    const bgColor = des[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  it('should color 2nd <h2> background w/ default color', () => {
    des[1].injector.get(HighlightDirective) as HighlightDirective;
    const bgColor = des[1].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('black');
  });

  it('should bind <input> background to value color', () => {
    // easier to work with nativeElement
    const input = des[2].nativeElement as HTMLInputElement;
    input.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(input.style.backgroundColor)
      .withContext('initial backgroundColor')
      .toBe('cyan');

    input.value = 'green';

    // Dispatch a DOM event so that Angular responds to the input value change.
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    input.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(input.style.backgroundColor)
      .withContext('changed backgroundColor')
      .toBe('green');
  });

  it('bare <h2> should not have a customProperty', () => {
    expect(bareH2.properties['customProperty']).toBeUndefined();
  });
});
