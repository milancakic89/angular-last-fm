import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockstarCardComponent } from './rockstar-card.component';

describe('RockstarCardComponent', () => {
  let component: RockstarCardComponent;
  let fixture: ComponentFixture<RockstarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockstarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockstarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
