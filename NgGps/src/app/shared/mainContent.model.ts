import { SignalStrengthCard } from './signalStrengthCard.model';
import { AverageSpeedCard } from './averageSpeedCard.model';
import { LocoGpsData } from './locoGpsData.model';
import { LargeIconCard } from './largeIconCard.model';
export class MainContent {
    public avgSpeedCard = new AverageSpeedCard();
    public signalStrengthCard = new SignalStrengthCard();
    public locoGpsData: LocoGpsData[];
    public largeIconCardList: LargeIconCard[] = new Array();
    constructor() {}
}
