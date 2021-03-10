import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'diameterProxyService',
  connector: 'rest',
  crud: false,
  debug: true,
  options: {
    strictSSL: false,
    headers: {
      accept: 'application/json',
      "content-type": 'application/json',
    }
  },
  operations: [
    {
      template: {
        method: "POST",
//        url: process.env.DCB_SL_DIRECT_DEBT_EVENT,
        url: 'http://[::1]:3010//v1/direct-debt-event',
        fullResponse: true,
        body: '{model:object}'
      },
      functions: {
        directDebtEvent: ['model'],
      }
    },
    {
      template: {
        method: "POST",
//        url: process.env.DCB_SL_REFUND_EVENT,
        url: 'http://[::1]:3010/v1/refund-event',
        fullResponse: true,
        body: '{model:object}'
      },
      functions: {
        refundEvent: ['model'],
      }
    }
  ]
};

// const config = {
//   name: 'diameter',
//   connector: 'rest',
//   baseURL: 'https://[::1]:3010',
//   crud: false
// };

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DiameterProxyServiceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'diameterProxyService';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.diameterProxyService', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
