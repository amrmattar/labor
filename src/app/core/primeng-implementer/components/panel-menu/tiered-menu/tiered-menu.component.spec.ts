import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieredMenuComponent } from './tiered-menu.component';

describe('PanelMenuComponent', () => {
  let component: TieredMenuComponent;
  let fixture: ComponentFixture<TieredMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TieredMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TieredMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
