import { Component, OnInit } from '@angular/core';
import { MagickAdvanced } from './magick-advanced';
import { MagickAdvancedService } from './magick-advanced.service';

@Component({
  selector: 'app-magick-advanced',
  templateUrl: './magick-advanced.component.html',
  styleUrls: ['./magick-advanced.component.css']
})
export class MagickAdvancedComponent implements OnInit{
  magicks: MagickAdvanced[] = [];
  stateMagicks: MagickAdvanced[] = [];
  rareMagicks: MagickAdvanced[] = [];


  constructor(private magickService: MagickAdvancedService) { }

  ngOnInit(): void {
    this.getMagicksAdvancedByTypesTrinity();
    this.getMagicksAdvanced();
  }

  getMagicksAdvanced(): void {
    /*this.magickService.getMagicksAdvanced()
    .subscribe(m => this.magicks = m);*/
    this.magickService.getMagicksAdvancedByTypes(['Luz', 'Oscuridad', 'Gravedad'])
    .subscribe(m => this.stateMagicks = m);
  }
  
  getMagicksAdvancedByTypesTrinity(): void {
    this.magickService.getMagicksAdvancedByTypes(['Curacion', 'Aumento', 'Estados', 'Obstruccion', 'Veneno', 'Fortaleza', 'Tiempo'])
    .subscribe(m => this.rareMagicks = m);
  }
}
