import { fade, expandCollapse } from './../../shares/animations';
import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-expansive-painel',
  templateUrl: './expansive-painel.component.html',
  styleUrls: ['./expansive-painel.component.scss'],
  animations: [
    fade(), expandCollapse(environment.animationMs)
  ]
})
export class ExpansivePainelComponent {
  @Input()
  labelTitle!: string;
  active: Boolean;
  anime: boolean;

  constructor() {
    this.active = false;
    this.anime = false;
  }

  flagViewActive() {
    this.active ? this.anime = !this.anime :
      setTimeout(() => {
        this.anime = !this.anime
      }, environment.animationMs);
  }


}
