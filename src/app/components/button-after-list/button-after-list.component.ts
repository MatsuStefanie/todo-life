import { subtileHover } from './../../shares/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-after-list',
  templateUrl: './button-after-list.component.html',
  styleUrls: ['./button-after-list.component.scss'],
  animations: [subtileHover()]
})
export class ButtonAfterListComponent {

  @Input()
  label!: string;
  mouse: Boolean;

  constructor() {
    this.mouse = false;
  }

}
