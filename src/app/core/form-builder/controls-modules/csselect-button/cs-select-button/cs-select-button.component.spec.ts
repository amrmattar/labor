import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSelectButtonComponent } from './cs-select-button.component';

describe('CsSelectButtonComponent', () => {
  let component: CsSelectButtonComponent;
  let fixture: ComponentFixture<CsSelectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsSelectButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
