import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { TestDirective } from './test.directive';

describe('TestDirective', () => {
  @Component({
    template: ` <h2 appTest="yellow">Something Yellow</h2>
      <h2 appTest>The Default (Gray)</h2>
      <h2>No Highlight</h2>
      <input #box [appTest]="box.value" value="cyan" />`,
  })
  class TestComponent {}

  let fixture: ComponentFixture<TestComponent>;
  let des;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached TestDirective
    des = fixture.debugElement.queryAll(By.directive(TestDirective));

    // the h2 without the TestDirective
    fixture.debugElement.query(By.css('h2:not([appTest])'));
  });

  it('should work', () => {
    expect(des.length).toBe(3);
  });
});
