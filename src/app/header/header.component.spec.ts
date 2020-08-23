import { HeaderComponent } from './header.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

  })

  it('Should set isMenuOpened property of HeaderComponent to true', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button');


    spyOn(component, "onToggleMenu").and.callThrough()

    button.click();


    expect(component.isMenuOpened).toBe(true)

  })

})