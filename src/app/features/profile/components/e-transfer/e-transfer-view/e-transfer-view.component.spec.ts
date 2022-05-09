import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETransferViewComponent } from './e-transfer-view.component';

describe('ETransferViewComponent', () => {
  let component: ETransferViewComponent;
  let fixture: ComponentFixture<ETransferViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETransferViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ETransferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
