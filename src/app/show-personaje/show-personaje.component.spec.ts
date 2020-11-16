import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonajeComponent } from './show-personaje.component';

describe('ShowPersonajeComponent', () => {
  let component: ShowPersonajeComponent;
  let fixture: ComponentFixture<ShowPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
