import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipe } from './custom-pipe';

describe('CustomPipe', () => {
  let component: CustomPipe;
  let fixture: ComponentFixture<CustomPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
