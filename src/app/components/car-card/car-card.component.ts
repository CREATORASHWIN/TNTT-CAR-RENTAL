import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html'
})
export class CarCardComponent {
  @Input() car: any;
}
