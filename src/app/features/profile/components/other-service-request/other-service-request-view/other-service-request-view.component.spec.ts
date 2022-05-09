import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServiceRequestViewComponent } from './other-service-request-view.component';

describe('OtherServiceRequestViewComponent', () => {
  let component: OtherServiceRequestViewComponent;
  let fixture: ComponentFixture<OtherServiceRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherServiceRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherServiceRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
