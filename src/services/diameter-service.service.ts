import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {DiameterProxyServiceDataSource} from '../datasources';
import {DirectDebtEventRequest} from './direct-debt-event-request.model';

export interface DiameterService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  directDebtEvent(directDebtEventRequest: DirectDebtEventRequest): Promise<DonTryIt>;
}

export class DiameterServiceProvider implements Provider<DiameterService> {
  constructor(
    // diameterProxyService must match the name property in the datasource json file
    @inject('datasources.diameterProxyService')
    protected dataSource: DiameterProxyServiceDataSource = new DiameterProxyServiceDataSource(),
  ) {}

  value(): Promise<DiameterService> {
    return getService(this.dataSource);
  }
}
export interface DonTryIt
 {
   responseHeader:
   {
     responseTimestamp:string
    },
    chargeId:string,
    result:string
}


