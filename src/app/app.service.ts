import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';

export class AppService{

  modalEmiter = new EventEmitter<boolean>();

  test(){
    console.log('Testing service');
  }
}