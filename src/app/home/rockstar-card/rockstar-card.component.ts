import { Component, OnInit, Input, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-rockstar-card',
  templateUrl: './rockstar-card.component.html',
  styleUrls: ['./rockstar-card.component.scss']
})
export class RockstarCardComponent implements OnInit {
  @Input() rockStar: any;
  @Input() rank: number;
  constructor() { }



  ngOnInit(): void {

  }

}
