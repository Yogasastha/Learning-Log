import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfCondtion } from './ng-if-condtion';

describe('NgIfCondtion', () => {
  let component: NgIfCondtion;
  let fixture: ComponentFixture<NgIfCondtion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgIfCondtion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfCondtion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
