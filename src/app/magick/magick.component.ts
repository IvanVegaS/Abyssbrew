import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Magick } from './magick';
import { MagickDetails } from './magick-details'
import { MagickService } from './magick.service';
import { MagickAdvanced } from '../magick-advanced/magick-advanced';
import { MagickAdvancedService } from '../magick-advanced/magick-advanced.service';

@Component({
  selector: 'app-magick',
  templateUrl: './magick.component.html',
  styleUrls: ['./magick.component.css']
})

export class MagickComponent {
  magicks: Magick[] | undefined;
  advancedMagicks: MagickAdvanced[] | undefined;
  mapBasic: Map<number, MagickDetails>;

  constructor(
    private route: ActivatedRoute,
    private magickService: MagickService,
    private magickAdvancedService: MagickAdvancedService,
    private location: Location) {
    let newMap = new Map([
          [1, {requires: 'Magick 1 - 2 ', uses: 1, range: '1 objetivo', damage: '1d6 + 10'}],
          [2, {requires: 'Magick 3 - 4', uses: 1, range: '3 m2', damage: '1d10 + 20'}],
          [3, {requires: 'Magick 5 - 6', uses: 1, range: '5 m2', damage: '2d10 + 40'}],
          [4, {requires: 'Magick 7 - 9', uses: 2, range: '10 m2', damage: '4d12 + 100'}],
          [5, {requires: 'Magick 10 - 12', uses: 2, range: '15 m2', damage: '4d12 + 200'}],
          [6, {requires: 'Magick 13 - 16', uses: 3, range: 'rango de vision', damage: '6d12 + 400'}],
          [7, {requires: 'Magick 17 - 20', uses: 3, range: 'rango de vision', damage: '8d12 + 600'}]
        ]);
    this.mapBasic = newMap;
  }

  ngOnInit(): void {
    this.getMagicks();
    this.getAdvancedMagicks();
  }

  getMagicks(): void {
    const type = this.route.snapshot.paramMap.get('type')!;
    this.magickService.getMagicksByType(type).subscribe(magicks => this.magicks = magicks);
  }

  getAdvancedMagicks(): void {
    const type = this.route.snapshot.paramMap.get('type')!;
    this.magickAdvancedService.getMagicksAdvancedByType(type).subscribe(advancedMagicks => this.advancedMagicks = advancedMagicks);
  }

  goBack(): void {
    this.location.back();
  }
}
