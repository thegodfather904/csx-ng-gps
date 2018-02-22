import { ApiKey } from './../secret/apiKey.model';
import { Injectable } from '@angular/core';

declare const apigClientFactory;

@Injectable()
export class LocoGpsService {

  apiKey = new ApiKey();

  apigClient = apigClientFactory.newClient({
    accessKey: this.apiKey.accessKey,
    secretKey: this.apiKey.secretKey,
    region: this.apiKey.region
  });

  constructor() { }

  getLocoGpsData(trainId: string, subdivision: string) {
    this.invokeAWS(trainId, subdivision);
  }

  invokeAWS(trainId: string, subdivision) {
    console.log('In service! ' + trainId + ', ' + subdivision);
  }

}
