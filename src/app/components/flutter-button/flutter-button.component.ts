import { expand } from './../../shares/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flutter-button',
  templateUrl: './flutter-button.component.html',
  styleUrls: ['./flutter-button.component.scss'],
  animations: [expand(500)]
})
export class FlutterButtonComponent {
  on: boolean = false;

  action() {
    console.log('I make this')
  }

}
