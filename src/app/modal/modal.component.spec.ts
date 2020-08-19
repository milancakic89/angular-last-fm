import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { Album } from '../shared/album.model';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let service: ModalService;
  beforeEach(() => {
    service = new ModalService(null)
    component = new ModalComponent(service)
  })
  it('Should remove modal', () => {
    component.isModalOpened = true;

     component.onRemoveModal()

    expect(component.isModalOpened).toBe(false);
  })
  it('Should emit selected album ', ()=>{
    
  })

})