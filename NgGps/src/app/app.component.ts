import { MainContent } from './shared/mainContent.model';
import { MainContentService } from './services/main-content/main-content.service';
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

  mainContentData: MainContent;

  constructor(
    private locoGpsService: LocoGpsService,
    private mainContentService: MainContentService
  ) {}

  onSearchDataset(userInput: HeaderUserInput) {
    this.locoGpsService.getLocoGpsData(userInput.trainId, userInput.subdivision)
    .then(results => this.mainContentService.buildMainContent(results))
    .then(mainContent => this.mainContentData = mainContent);
  }
}
