import { HeaderComponent } from './header.component';
import { AppService } from '../app.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let service: AppService;

  beforeEach(() => {
    service = new AppService(null);
    component = new HeaderComponent(service);

  });

  it('Should set isMenuOpened property of HeaderComponent to true', () => {

    spyOn(component, "onToggleMenu").and.callFake(() => {
      component.isMenuOpened = !component.isMenuOpened;
    })

    component.onToggleMenu()


    expect(component.isMenuOpened).toBe(true)

  })

})