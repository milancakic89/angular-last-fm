import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockstarDetailsComponent } from './rockstar-details.component';

describe('RockstarDetailsComponent', () => {
  let component: RockstarDetailsComponent;
  let fixture: ComponentFixture<RockstarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockstarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockstarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
