import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  constructor(private service: AppService) {

  }
  ngOnInit() {
   
  }
}
