import { SignalStrengthCard } from './../../shared/signalStrengthCard.model';
import { AverageSpeedCard } from './../../shared/averageSpeedCard.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-cards',
  templateUrl: './graph-cards.component.html',
  styleUrls: ['./graph-cards.component.scss']
})
export class GraphCardsComponent implements OnInit {

  @Input()
  avgSpeedCard: AverageSpeedCard;

  @Input()
  signalStrengthCard: SignalStrengthCard;

  constructor() { }

  ngOnInit() {
  }

}
