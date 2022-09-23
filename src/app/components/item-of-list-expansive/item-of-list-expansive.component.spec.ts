import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOfListExpansiveComponent } from './item-of-list-expansive.component';

describe('ItemOfListExpansiveComponent', () => {
  let component: ItemOfListExpansiveComponent;
  let fixture: ComponentFixture<ItemOfListExpansiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOfListExpansiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemOfListExpansiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
