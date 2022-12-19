import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagickCombinationsComponent } from './magick-combinations.component';

describe('MagickCombinationsComponent', () => {
  let component: MagickCombinationsComponent;
  let fixture: ComponentFixture<MagickCombinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagickCombinationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagickCombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
