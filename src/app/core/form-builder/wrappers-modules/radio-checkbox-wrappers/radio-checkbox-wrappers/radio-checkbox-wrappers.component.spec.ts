import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioCheckboxWrappersComponent } from './radio-checkbox-wrappers.component';

describe('RadioCheckboxWrappersComponent', () => {
  let component: RadioCheckboxWrappersComponent;
  let fixture: ComponentFixture<RadioCheckboxWrappersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioCheckboxWrappersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioCheckboxWrappersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
