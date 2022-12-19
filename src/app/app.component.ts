import { Component, HostBinding } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Abyssbrew';

  brandImagePath : string;

  constructor(private contexts: ChildrenOutletContexts) {
    this.brandImagePath = '/assets/images/starcompass.png'
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
