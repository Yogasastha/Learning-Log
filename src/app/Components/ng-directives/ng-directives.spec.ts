import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDirectives } from './ng-directives';

describe('NgDirectives', () => {
  let component: NgDirectives;
  let fixture: ComponentFixture<NgDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
