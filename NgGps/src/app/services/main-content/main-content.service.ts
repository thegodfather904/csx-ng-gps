import { MainContent } from './../../shared/mainContent.model';
import { LocoGpsData } from './../../shared/locoGpsData.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MainContentService {

  constructor() { }

  buildMainContent(locoGpsData: LocoGpsData[]): Promise<MainContent> {
    return new Promise((resolve, reject) => {
      const mainContent = new MainContent();
      mainContent.locoGpsData = locoGpsData;
      resolve(mainContent);
    });
  }

}
