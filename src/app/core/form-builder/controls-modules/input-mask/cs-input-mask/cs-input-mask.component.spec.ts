import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInputMaskComponent } from './cs-input-mask.component';

describe('CsInputMaskComponent', () => {
  let component: CsInputMaskComponent;
  let fixture: ComponentFixture<CsInputMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsInputMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
