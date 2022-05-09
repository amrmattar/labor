import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTextComponent } from './cs-text.component';

describe('CsTextComponent', () => {
  let component: CsTextComponent;
  let fixture: ComponentFixture<CsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
