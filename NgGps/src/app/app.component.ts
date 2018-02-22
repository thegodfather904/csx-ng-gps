import { HeaderUserInput } from './shared/headerUserInput.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  onSearchDataset(userInput: HeaderUserInput) {
    console.log(userInput);
  }
}
