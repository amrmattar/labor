import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfControlsComponent } from './head-of-controls.component';

describe('HeadOfControlsComponent', () => {
  let component: HeadOfControlsComponent;
  let fixture: ComponentFixture<HeadOfControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
