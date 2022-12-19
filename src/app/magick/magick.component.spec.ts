import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagickComponent } from './magick.component';

describe('MagickComponent', () => {
  let component: MagickComponent;
  let fixture: ComponentFixture<MagickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
