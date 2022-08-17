import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { UnlessDirective } from './unless.directive';

describe('UnlessDirective', () => {
  @Component({
    template: `
      <h2 *appUnless="true">true</h2>
      <h2 *appUnless="false">false</h2>
      <h2>No unless</h2>
    `,
  })
  class TestComponent {}

  let fixture: ComponentFixture<TestComponent>;
  let allVisibleH2s;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [UnlessDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached UnlessDirective
    fixture.debugElement.queryAll(By.directive(UnlessDirective));
    allVisibleH2s = fixture.debugElement.queryAll(By.css('h2'));

    // the h2 without the UnlessDirective
    fixture.debugElement.query(By.css('h2:not([appUnless])'));
  });

  it('should work', () => {
    expect(allVisibleH2s.length).toBe(2);
  });
});
