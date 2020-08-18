import { ModalComponent } from './modal.component';
import { AppService } from '../app.service';
import { Album } from '../shared/album.model';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let service: AppService;
  beforeEach(() => {
    service = new AppService(null)
    component = new ModalComponent(service, null)
  })
  it('Should remove modal', () => {
    component.isModalOpened = true;

     component.onRemoveModal()

    expect(component.isModalOpened).toBe(false);
  })
  it('Should emit selected album ', ()=>{
    
  })

})