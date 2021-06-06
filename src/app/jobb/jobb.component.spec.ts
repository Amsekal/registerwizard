import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobbComponent } from './jobb.component';

describe('JobbComponent', () => {
  let component: JobbComponent;
  let fixture: ComponentFixture<JobbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
