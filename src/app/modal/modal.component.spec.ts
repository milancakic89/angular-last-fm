import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { TestBed } from '@angular/core/testing';
import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiURL } from '../shared/apiURL';



describe('ModalComponent', () => {
  let component: ModalComponent;
  let service: ModalService;
  let apiUrl: ApiURL;

  beforeEach(() => {
    component = new ModalComponent(null)
    apiUrl = new ApiURL();
    service = new ModalService(null, null);

    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [
        { provide: ModalService, useClass: ServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })

  })
  it('Should remove modal', () => {
    component.isModalOpened = true;

    component.onRemoveModal()

    expect(component.isModalOpened).toBe(false);
  })
  it('Should get url for tracklist', () => {


    spyOn(apiUrl, 'structureArtistsAlbumURL').and.stub()

    service.fetchTracklist('Cher', 'Believe');

    expect(apiUrl.structureAlbumsURL).toHaveBeenCalled()


  })



})

class ServiceStub {
  modalEmiter = new EventEmitter<any>();

  onRemoveModal() {
    return false;
  }
}