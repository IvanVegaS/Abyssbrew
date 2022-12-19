import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagickConditionsComponent } from './magick-conditions.component';

describe('MagickConditionsComponent', () => {
  let component: MagickConditionsComponent;
  let fixture: ComponentFixture<MagickConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagickConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagickConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
