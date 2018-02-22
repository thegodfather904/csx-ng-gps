import { LocoGpsService } from './services/loco-gps/loco-gps.service';
import { HeaderUserInput } from './shared/headerUserInput.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private locoGpsService: LocoGpsService
  ) {}

  onSearchDataset(userInput: HeaderUserInput) {
    this.locoGpsService.getLocoGpsData(userInput.trainId, userInput.subdivision);
  }
}
