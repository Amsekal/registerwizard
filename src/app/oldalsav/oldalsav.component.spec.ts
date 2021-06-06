import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldalsavComponent } from './oldalsav.component';

describe('OldalsavComponent', () => {
  let component: OldalsavComponent;
  let fixture: ComponentFixture<OldalsavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldalsavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldalsavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
