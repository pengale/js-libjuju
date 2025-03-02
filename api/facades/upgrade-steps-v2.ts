/**
  Juju UpgradeSteps version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Entity {
  tag: string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface ErrorResults {
  results: ErrorResult[];
}

interface SetUnitStateArg {
  'charm-state'?: AdditionalProperties;
  'meter-status-state'?: string;
  'relation-state'?: AdditionalProperties;
  'storage-state'?: string;
  tag: string;
  'uniter-state'?: string;
}

interface SetUnitStateArgs {
  args: SetUnitStateArg[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class UpgradeStepsV2 {
  static NAME: string = 'UpgradeSteps';
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
    ResetKVMMachineModificationStatusIdle sets the modification status
    of a kvm machine to idle if it is in an error state before upgrade.
    Related to lp:1829393.
  */
  resetKVMMachineModificationStatusIdle(params: Entity): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSteps',
        request: 'ResetKVMMachineModificationStatusIdle',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WriteAgentState writes the agent state for the set of units provided. This
    call presently deals with the state for the unit agent.
  */
  writeAgentState(params: SetUnitStateArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSteps',
        request: 'WriteAgentState',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default UpgradeStepsV2;
