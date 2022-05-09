import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthoratizeComponent } from './un-authoratize.component';

describe('UnAuthoratizeComponent', () => {
  let component: UnAuthoratizeComponent;
  let fixture: ComponentFixture<UnAuthoratizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnAuthoratizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAuthoratizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
