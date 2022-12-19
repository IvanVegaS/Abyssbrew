import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagickBasicComponent } from './magick-basic.component';

describe('MagickBasicComponent', () => {
  let component: MagickBasicComponent;
  let fixture: ComponentFixture<MagickBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagickBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagickBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
