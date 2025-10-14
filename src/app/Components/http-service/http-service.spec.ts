import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpService } from './http-service';

describe('HttpService', () => {
  let component: HttpService;
  let fixture: ComponentFixture<HttpService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
