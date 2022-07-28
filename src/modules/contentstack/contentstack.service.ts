import { Injectable } from '@angular/core';
import * as contentstack from 'contentstack/web';
import { Config } from './config';

@Injectable()
export class ContentstackService {
  Stack: any = {};
  stackConfig: any = {};
  constructor(private config: Config) {}

  public stack() {
    this.stackConfig = {
      api_key: this.config.api_key,
      delivery_token: this.config.delivery_token,
      environment: this.config.environment,
      region: contentstack.Region[this.config.region],
    };
    return contentstack.Stack(this.stackConfig);
  }
}
