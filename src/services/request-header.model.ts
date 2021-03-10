import {model, property} from '@loopback/repository';


/**
 * The model class is generated from OpenAPI schema - RequestHeader
 * This is the message header for the request SLA http body.
 */
@model({name: 'RequestHeader'})
export class RequestHeader {
  constructor(data?: Partial<RequestHeader>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * Unique identifier of this request. This is a string that has a max length of
100 characters, and contains only the characters \"a-z\", \"A-Z\", \"0-9\",
\":\", \"-\", and \"_\".
   */
  @property({
    required: true,
    description: 'requestId',
    type: 'string',
})
  requestId?: string;

  /**
   * Timestamp of this request represented as milliseconds since epoch. The
receiver should verify that this timestamp is ± 60s of 'now'. This request
timestamp is not idempotent upon retries.
   */
  @property({
    required: true,
    description: "**REQUIRED**: Timestamp of this request represented as milliseconds since\nepoch.  The receiver should verify that this timestamp is ± 60s of 'now'.\nThis request timestamp is not idempotent upon retries.",
    type: 'string',
    jsonSchema: {
      minimum: -9223372036854776000,
      maximum: 9223372036854776000,
    }
})
  requestTimestamp?: string;

  /**
   * Major version. This is marked for compatibility requests with different
versions are not guaranteed to be compatible.
   */
  @property({
    required: true,
    description: '**REQUIRED**: Major version.  This is marked for compatibility\nrequests with different versions are not guaranteed to be compatible.',
    type: 'string',
    jsonSchema: {
      minimum: -2147483648,
      maximum: 2147483647,
    }
})
  apiMajorVersion: string;

}

export interface RequestHeaderRelations {
  // describe navigational properties here
}

export type RequestHeaderWithRelations = RequestHeader & RequestHeaderRelations;


