import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAfterListComponent } from './button-after-list.component';

describe('ButtonAfterListComponent', () => {
  let component: ButtonAfterListComponent;
  let fixture: ComponentFixture<ButtonAfterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAfterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAfterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
