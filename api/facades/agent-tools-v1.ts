/**
  Juju AgentTools version 1.
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



/**
  AgentToolsAPI implements the API used by the machine model worker.
*/
class AgentToolsV1 {
  static NAME: string = 'AgentTools';
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
    UpdateToolsAvailable invokes a lookup and further update in environ
    for new patches of the current tool versions.
  */
  updateToolsAvailable(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'AgentTools',
        request: 'UpdateToolsAvailable',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default AgentToolsV1;
