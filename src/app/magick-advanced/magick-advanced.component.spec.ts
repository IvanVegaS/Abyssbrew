import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagickAdvancedComponent } from './magick-advanced.component';

describe('MagickAdvancedComponent', () => {
  let component: MagickAdvancedComponent;
  let fixture: ComponentFixture<MagickAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagickAdvancedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagickAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
