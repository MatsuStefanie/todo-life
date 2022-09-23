import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-of-list-expansive',
  templateUrl: './item-of-list-expansive.component.html',
  styleUrls: ['./item-of-list-expansive.component.scss']
})
export class ItemOfListExpansiveComponent implements OnInit {
  @Input()
  label!: string;
  
  select: Boolean;
  constructor() {
    this.select = false;
  }

  ngOnInit(): void {
  }
  changeItem() {
    this.select = !this.select;
  }
}
