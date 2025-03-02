/**
  Juju CAASModelConfigManager version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface ControllerConfigResult {
  config: AdditionalProperties;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade allows model config manager clients to watch controller config changes and fetch controller config.
*/
class CAASModelConfigManagerV1 {
  static NAME: string = 'CAASModelConfigManager';
  static VERSION: number = 1;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**

  */
  controllerConfig(): Promise<ControllerConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASModelConfigManager',
        request: 'ControllerConfig',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CAASModelConfigManagerV1;
