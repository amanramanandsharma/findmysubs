import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttMoviesCuratedComponent } from './ott-movies-curated.component';

describe('OttMoviesCuratedComponent', () => {
  let component: OttMoviesCuratedComponent;
  let fixture: ComponentFixture<OttMoviesCuratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttMoviesCuratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttMoviesCuratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
