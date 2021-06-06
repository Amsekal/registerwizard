import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdComponent } from './birthd.component';

describe('BirthdComponent', () => {
  let component: BirthdComponent;
  let fixture: ComponentFixture<BirthdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
