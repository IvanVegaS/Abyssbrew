import { Component, OnInit } from '@angular/core';
import { Magick } from '../magick/magick';
import { MagickService } from '../magick/magick.service';

@Component({
  selector: 'app-magick-basic',
  templateUrl: './magick-basic.component.html',
  styleUrls: ['./magick-basic.component.css']
})
export class MagickBasicComponent implements OnInit{
  magicks: Magick[] = [];

  constructor(private magickService: MagickService) { }

  ngOnInit(): void {
    this.getMagicks();
  }

  getMagicks(): void {
    this.magickService.getMagicks()
    .subscribe(magicks => this.magicks = magicks);
  }
}
