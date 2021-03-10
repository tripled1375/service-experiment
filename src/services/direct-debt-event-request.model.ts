import {model, property} from '@loopback/repository';
import {RequestHeader} from './request-header.model';


/**
 * The model class is generated from OpenAPI schema - DirectDebtEventRequest
 * This is the request message for the direct-debt-event operation.
 */
@model({name: 'DirectDebtEventRequest'})
export class DirectDebtEventRequest {
  constructor(data?: Partial<DirectDebtEventRequest>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * This is the message header for the request SLA http body.
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/RequestHeader',
}})
  requestHeader: RequestHeader;

  /**
   * The MDN to be charged/refunded.
   */
  @property({required: true, jsonSchema: {
    description: 'The MDN to be charged/refunded.',
    type: 'string',
  }})
    mdn: string;

  /**
   * The amount to be charged/refunded.
   */
  @property({required: true, jsonSchema: {
    description: 'The amount to be charged/refunded.',
    type: 'number',
  }})
    amount: number;
  /**
   * The description of the charge/refund.
   */
  @property({required: true, jsonSchema: {
    description: 'The description of the charge/refund.',
    type: 'string',
  }})
    description: string;

}

export interface DirectDebtEventRequestRelations {
  // describe navigational properties here
}

export type DirectDebtEventRequestWithRelations = DirectDebtEventRequest & DirectDebtEventRequestRelations;


