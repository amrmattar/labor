import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsDateComponent } from './cs-date.component';

describe('CsDateComponent', () => {
  let component: CsDateComponent;
  let fixture: ComponentFixture<CsDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
