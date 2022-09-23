import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansivePainelComponent } from './expansive-painel.component';

describe('ExpansivePainelComponent', () => {
  let component: ExpansivePainelComponent;
  let fixture: ComponentFixture<ExpansivePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansivePainelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansivePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
