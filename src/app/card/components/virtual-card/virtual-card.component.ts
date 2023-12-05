import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-virtual-card',
  templateUrl: './virtual-card.component.html',
  styleUrls: ['./virtual-card.component.css', './virtual-card-responsive.component.css']
})
export class VirtualCardComponent {

  @Input()
  public cardNumber: string = '';

  @Input()
  public date: string = '';

  @Input()
  public cardName: string = '';


}
