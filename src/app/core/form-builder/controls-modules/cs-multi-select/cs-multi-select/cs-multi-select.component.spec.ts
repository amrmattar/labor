import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsMultiSelectComponent } from './cs-multi-select.component';

describe('CsMultiSelectComponent', () => {
  let component: CsMultiSelectComponent;
  let fixture: ComponentFixture<CsMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
