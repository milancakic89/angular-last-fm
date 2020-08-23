import { AlbumCardComponent } from './album-card.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ModalService } from 'src/app/modal/modal.service';
import { EventEmitter, DebugElement } from '@angular/core';




describe('AlbumCardComponent', () => {
  let component: AlbumCardComponent;
  let fixture: ComponentFixture<AlbumCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumCardComponent],
      providers: [
        { provide: ModalService, useClass: ServiceStub }
      ]
    })
      .compileComponents()

  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('Should create compoenent', () => {
    expect(AlbumCardComponent).toBeTruthy()
  })
  it('Should contain a button', () => {
    let btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.textContent).toBe('Details')
  })
  it('Should execute onToggleModal when button is clicked', () => {
    let btn = fixture.debugElement.query(By.css('button'))
    const nativeButton: HTMLButtonElement = btn.nativeElement;
    spyOn(component, "onToggleModal").and.callThrough()
    nativeButton.click();
    fixture.detectChanges()
    expect(component.onToggleModal).toHaveBeenCalled()
  })

  // stoped here

})

class ServiceStub {
  modalEmiter = new EventEmitter<any>();
}