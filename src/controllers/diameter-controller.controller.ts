// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {DiameterService, DonTryIt} from '../services/diameter-service.service';
import {get, requestBody, operation} from '@loopback/rest';
import {DirectDebtEventRequest} from '../services/direct-debt-event-request.model'

// import {inject} from '@loopback/core';


export class DiameterControllerController {
  constructor(
    @inject('services.DiameterService') protected diameterService:DiameterService,
  ) {}


  @operation('post', '/v1/mdn-charges')
  async createMdnCharge(@requestBody() _requestBody: DirectDebtEventRequest): Promise<DonTryIt>
   {
      console.log("Calling servcie " + JSON.stringify(_requestBody));
      try {
      const wab = await this.diameterService.directDebtEvent(_requestBody);
      console.log("After service " + JSON.stringify(wab));
      return Promise.resolve(wab);
      }
      catch (err) {
        console.log ("DWD err " + err)
        throw err;
      }

    }
}
