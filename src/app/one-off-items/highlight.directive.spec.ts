import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  @Component({
    template: ` <h2 appHighlight="yellow">Something Yellow</h2>
      <h2 appHighlight>The Default (Gray)</h2>
      <h2>No Highlight</h2>
      <input #box [appHighlight]="box.value" value="cyan" />`,
  })
  class TestComponent {}

  let fixture: ComponentFixture<TestComponent>;
  let des;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));

    // the h2 without the HighlightDirective
    fixture.debugElement.query(By.css('h2:not([appHighlight])'));
  });

  it('should work', () => {
    expect(des.length).toBe(3);
  });
});
