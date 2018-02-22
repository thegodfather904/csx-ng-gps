import { LocoGpsIcons } from './../../shared/locoGpsIcons.model';
import { LargeIconCardStyles } from './../../shared/largeIconCardStyles.model';
import { LargeIconCard } from './../../shared/largeIconCard.model';
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

      const uniqueTrains = [];
      const uniqueLocos = [];
      const uniqueSubs = [];
      const uniqueDevice = [];

      for (let i = 0; i < locoGpsData.length; i++) {

        if (uniqueTrains.indexOf(locoGpsData[i].train_i) === -1) {
         uniqueTrains.push(locoGpsData[i].train_i);
        }
        if (uniqueLocos.indexOf(locoGpsData[i].loco_i) === -1) {
         uniqueLocos.push(locoGpsData[i].loco_i);
        }
        if (uniqueSubs.indexOf(locoGpsData[i].trans_subdiv_c) === -1) {
         uniqueSubs.push(locoGpsData[i].trans_subdiv_c);
        }
        if (uniqueDevice.indexOf(locoGpsData[i].device_i) === -1) {
         uniqueDevice.push(locoGpsData[i].device_i);
        }
      }

      const cardStyles = new LargeIconCardStyles();
      const cardIcons = new LocoGpsIcons();

      mainContent.largeIconCardList.push(this.buildLargeCard('Trains', uniqueTrains,
        cardStyles.stylesList[0], cardIcons.iconList[0]));
      mainContent.largeIconCardList.push(this.buildLargeCard('Locos', uniqueLocos,
         cardStyles.stylesList[1], cardIcons.iconList[1]));
      mainContent.largeIconCardList.push(this.buildLargeCard('Subdivisions', uniqueSubs,
         cardStyles.stylesList[2], cardIcons.iconList[2]));
      mainContent.largeIconCardList.push(this.buildLargeCard('Device', uniqueDevice,
         cardStyles.stylesList[3], cardIcons.iconList[3]));

      resolve(mainContent);
    });
  }

  buildLargeCard(title: string, uniqueValues: string[], cardStyle: any, cardIcon: string): LargeIconCard {
    const largeIconCard = new LargeIconCard();
    largeIconCard.title = title;
    largeIconCard.value = uniqueValues.length;
    largeIconCard.uniqueValues = uniqueValues;
    largeIconCard.cardStyle = cardStyle;
    largeIconCard.cardImage = cardIcon;
    return largeIconCard;
  }

}
