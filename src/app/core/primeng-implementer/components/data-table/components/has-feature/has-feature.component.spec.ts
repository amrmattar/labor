import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasFeatureComponent } from './has-feature.component';

describe('HasFeatureComponent', () => {
  let component: HasFeatureComponent;
  let fixture: ComponentFixture<HasFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
