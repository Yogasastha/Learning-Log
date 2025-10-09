import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForCondition } from './ng-for-condition';

describe('NgForCondition', () => {
  let component: NgForCondition;
  let fixture: ComponentFixture<NgForCondition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgForCondition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForCondition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
