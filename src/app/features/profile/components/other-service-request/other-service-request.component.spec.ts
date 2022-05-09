import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServiceRequestComponent } from './other-service-request.component';

describe('OtherServiceRequestComponent', () => {
  let component: OtherServiceRequestComponent;
  let fixture: ComponentFixture<OtherServiceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherServiceRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherServiceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
