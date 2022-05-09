import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServiceRequestCreateComponent } from './other-service-request-create.component';

describe('OtherServiceRequestCreateComponent', () => {
  let component: OtherServiceRequestCreateComponent;
  let fixture: ComponentFixture<OtherServiceRequestCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherServiceRequestCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherServiceRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
