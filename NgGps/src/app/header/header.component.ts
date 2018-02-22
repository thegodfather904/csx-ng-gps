import { HeaderUserInput } from './../shared/headerUserInput.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInput = new HeaderUserInput();

  constructor() { }

  ngOnInit() {
    this.userInput.trainId = 'Q21602';
    this.userInput.subdivision = 'C3';
  }

  search() {
    console.log(this.userInput);
  }

}
