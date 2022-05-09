import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTextareaComponent } from './cs-textarea.component';

describe('CsTextareaComponent', () => {
  let component: CsTextareaComponent;
  let fixture: ComponentFixture<CsTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
