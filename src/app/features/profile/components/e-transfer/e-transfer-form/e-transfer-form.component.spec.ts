import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETransferFormComponent } from './e-transfer-form.component';

describe('ETransferFormComponent', () => {
  let component: ETransferFormComponent;
  let fixture: ComponentFixture<ETransferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETransferFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ETransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
