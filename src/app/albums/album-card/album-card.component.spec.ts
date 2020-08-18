import { AlbumCardComponent } from './album-card.component';
import { AppService } from '../../app.service';
import { Album } from '../../shared/album.model';
import { ModalComponent } from '../../modal/modal.component';
import { TestBed } from '@angular/core/testing';



describe('AlbumCardComponent', () => {
  let service: AppService;
  let component: AlbumCardComponent;
  let modal: ModalComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    })
    component = new AlbumCardComponent(null)
    service = new AppService(null);
    modal = new ModalComponent(null, null)
  })
  // stoped here

})