import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandling } from './event-handling';

describe('EventHandling', () => {
  let component: EventHandling;
  let fixture: ComponentFixture<EventHandling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventHandling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHandling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
