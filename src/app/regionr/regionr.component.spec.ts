import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionrComponent } from './regionr.component';

describe('RegionrComponent', () => {
  let component: RegionrComponent;
  let fixture: ComponentFixture<RegionrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
