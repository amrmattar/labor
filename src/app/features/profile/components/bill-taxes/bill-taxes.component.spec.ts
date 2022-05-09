import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillTaxesComponent } from './bill-taxes.component';

describe('BillTaxesComponent', () => {
  let component: BillTaxesComponent;
  let fixture: ComponentFixture<BillTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
