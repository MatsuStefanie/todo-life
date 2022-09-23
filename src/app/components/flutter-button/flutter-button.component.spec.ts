import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterButtonComponent } from './flutter-button.component';

describe('FlutterButtonComponent', () => {
  let component: FlutterButtonComponent;
  let fixture: ComponentFixture<FlutterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlutterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlutterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
