import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentServerSideComponent } from './attachment-server-side.component';

describe('AttachmentComponent', () => {
  let component: AttachmentServerSideComponent;
  let fixture: ComponentFixture<AttachmentServerSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentServerSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentServerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
