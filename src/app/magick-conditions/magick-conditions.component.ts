import { Component, OnInit } from '@angular/core';
import { Condition } from './magick-conditions';
import { ConditionService } from './condition.service';

@Component({
  selector: 'app-magick-conditions',
  templateUrl: './magick-conditions.component.html',
  styleUrls: ['./magick-conditions.component.css']
})
export class MagickConditionsComponent {
  conditions: Condition[] = [];

  constructor(private conditionService: ConditionService) { }

  ngOnInit(): void {
    this.getConditions();
  }

  getConditions(): void {
    this.conditionService.getConditions()
    .subscribe(conditions => this.conditions = conditions);
  }
}
