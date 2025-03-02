/**
  Juju StatusHistory version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ModelConfigResult {
  config: AdditionalProperties;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface StatusHistoryPruneArgs {
  'max-history-mb': number;
  'max-history-time': number;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API is the concrete implementation of the Pruner endpoint.
*/
class StatusHistoryV2 {
  static NAME: string = 'StatusHistory';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    ModelConfig returns the current model's configuration.
  */
  modelConfig(): Promise<ModelConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StatusHistory',
        request: 'ModelConfig',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Prune endpoint removes status history entries until
    only the ones newer than now - p.MaxHistoryTime remain and
    the history is smaller than p.MaxHistoryMB.
  */
  prune(params: StatusHistoryPruneArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StatusHistory',
        request: 'Prune',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchForModelConfigChanges returns a NotifyWatcher that observes
    changes to the model configuration.
    Note that although the NotifyWatchResult contains an Error field,
    it's not used because we are only returning a single watcher,
    so we use the regular error return.
  */
  watchForModelConfigChanges(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StatusHistory',
        request: 'WatchForModelConfigChanges',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default StatusHistoryV2;
