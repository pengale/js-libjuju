/**
  Juju EntityWatcher version 2.
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


interface EntitiesWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvEntitiesWatcher defines the API for methods on a state.StringsWatcher.
  Each client has its own current set of watchers, stored in resources.
  srvEntitiesWatcher notifies about changes for all entities of a given kind,
  sending the changes as a list of strings, which could be transformed
  from state entity ids to their corresponding entity tags.
*/
class EntityWatcherV2 {
  static NAME: string = 'EntityWatcher';
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
    Next returns when a change has occurred to an entity of the
    collection being watched since the most recent call to Next
    or the Watch call that created the srvEntitiesWatcher.
  */
  next(): Promise<EntitiesWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'EntityWatcher',
        request: 'Next',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Stop stops the watcher.
  */
  stop(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'EntityWatcher',
        request: 'Stop',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default EntityWatcherV2;
