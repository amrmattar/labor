import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferToDriversComponent } from './transfer-to-drivers.component';

describe('TransferToDriversComponent', () => {
  let component: TransferToDriversComponent;
  let fixture: ComponentFixture<TransferToDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferToDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferToDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
