import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Magick } from './magick';
import { MagickService } from './magick.service';

@Component({
  selector: 'app-magick',
  templateUrl: './magick.component.html',
  styleUrls: ['./magick.component.css']
})

export class MagickComponent {
  magicks: Magick[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private magickService: MagickService,
    private location: Location) {}

  ngOnInit(): void {
    this.getMagicks();
  }

  getMagicks(): void {
    const type = this.route.snapshot.paramMap.get('type')!;
    this.magickService.getMagicksByType(type).subscribe(magicks => this.magicks = magicks);
  }

  goBack(): void {
    this.location.back();
  }
}
