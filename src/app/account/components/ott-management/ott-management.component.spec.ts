import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttManagementComponent } from './ott-management.component';

describe('OttManagementComponent', () => {
  let component: OttManagementComponent;
  let fixture: ComponentFixture<OttManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
