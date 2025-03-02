/**
  Juju RemoteRelations version 2.
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


interface ControllerAPIInfoResult {
  addresses: string[];
  cacert: string;
  error?: Error;
}

interface ControllerAPIInfoResults {
  results: ControllerAPIInfoResult[];
}

interface ControllerConfigResult {
  config: AdditionalProperties;
}

interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

interface EntityMacaroonArg {
  macaroon: Macaroon;
  tag: string;
}

interface EntityMacaroonArgs {
  Args: EntityMacaroonArg[];
}

interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
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

interface ExternalControllerInfo {
  addrs: string[];
  'ca-cert': string;
  'controller-alias': string;
  'controller-tag': string;
}

interface GetTokenArg {
  tag: string;
}

interface GetTokenArgs {
  Args: GetTokenArg[];
}

interface Macaroon {
  [key: string]: AdditionalProperties;
}

interface RemoteApplication {
  'consume-version'?: number;
  'is-consumer-proxy': boolean;
  life?: string;
  macaroon?: Macaroon;
  'model-uuid': string;
  name: string;
  'offer-uuid': string;
  status?: string;
}

interface RemoteApplicationResult {
  error: Error;
  result: RemoteApplication;
}

interface RemoteApplicationResults {
  results: RemoteApplicationResult[];
}

interface RemoteEndpoint {
  interface: string;
  limit: number;
  name: string;
  role: string;
}

interface RemoteEntityTokenArg {
  tag: string;
  token?: string;
}

interface RemoteEntityTokenArgs {
  Args: RemoteEntityTokenArg[];
}

interface RemoteRelation {
  'application-name': string;
  endpoint: RemoteEndpoint;
  id: number;
  key: string;
  life: string;
  'remote-application-name': string;
  'remote-endpoint-name': string;
  'source-model-uuid': string;
  suspended: boolean;
}

interface RemoteRelationChangeEvent {
  'application-settings'?: AdditionalProperties;
  'application-token': string;
  'bakery-version'?: number;
  'changed-units'?: RemoteRelationUnitChange[];
  'departed-units'?: number[];
  'force-cleanup'?: boolean;
  life: string;
  macaroons?: Macaroon[];
  'relation-token': string;
  suspended?: boolean;
  'suspended-reason'?: string;
  'unit-count'?: number;
}

interface RemoteRelationResult {
  error: Error;
  result: RemoteRelation;
}

interface RemoteRelationResults {
  results: RemoteRelationResult[];
}

interface RemoteRelationUnitChange {
  settings?: AdditionalProperties;
  'unit-id': number;
}

interface RemoteRelationWatchResult {
  changes: RemoteRelationChangeEvent;
  error?: Error;
  'watcher-id': string;
}

interface RemoteRelationWatchResults {
  results: RemoteRelationWatchResult[];
}

interface RemoteRelationsChanges {
  changes: RemoteRelationChangeEvent[];
}

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface StringResult {
  error?: Error;
  result: string;
}

interface StringResults {
  results: StringResult[];
}

interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface StringsWatchResults {
  results: StringsWatchResult[];
}

interface TokenResult {
  error: Error;
  token: string;
}

interface TokenResults {
  results: TokenResult[];
}

interface UpdateControllerForModel {
  info: ExternalControllerInfo;
  'model-tag': string;
}

interface UpdateControllersForModelsParams {
  changes: UpdateControllerForModel[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API provides access to the remote relations API facade.
*/
class RemoteRelationsV2 {
  static NAME: string = 'RemoteRelations';
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
    ConsumeRemoteRelationChanges consumes changes to settings originating
    from the remote/offering side of relations.
  */
  consumeRemoteRelationChanges(params: RemoteRelationsChanges): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'ConsumeRemoteRelationChanges',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ControllerAPIInfoForModels returns the controller api connection details for the specified models.
  */
  controllerAPIInfoForModels(params: Entities): Promise<ControllerAPIInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'ControllerAPIInfoForModels',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ControllerConfig returns the controller's configuration.
  */
  controllerConfig(): Promise<ControllerConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'ControllerConfig',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ExportEntities allocates unique, remote entity IDs for the given entities in the local model.
  */
  exportEntities(params: Entities): Promise<TokenResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'ExportEntities',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetTokens returns the token associated with the entities with the given tags for the given models.
  */
  getTokens(params: GetTokenArgs): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'GetTokens',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ImportRemoteEntities adds entities to the remote entities collection with the specified opaque tokens.
  */
  importRemoteEntities(params: RemoteEntityTokenArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'ImportRemoteEntities',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Relations returns information about the cross-model relations with the specified keys
    in the local model.
  */
  relations(params: Entities): Promise<RemoteRelationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'Relations',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoteApplications returns the current state of the remote applications with
    the specified names in the local model.
  */
  remoteApplications(params: Entities): Promise<RemoteApplicationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'RemoteApplications',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SaveMacaroons saves the macaroons for the given entities.
  */
  saveMacaroons(params: EntityMacaroonArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'SaveMacaroons',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetRemoteApplicationsStatus sets the status for the specified remote applications.
  */
  setRemoteApplicationsStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'SetRemoteApplicationsStatus',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpdateControllersForModels changes the external controller records for the
    associated model entities. This is used when the remote relations worker gets
    redirected following migration of an offering model.
  */
  updateControllersForModels(params: UpdateControllersForModelsParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'UpdateControllersForModels',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchLocalRelationChanges starts a RemoteRelationWatcher for each
    specified relation, returning the watcher IDs and initial values,
    or an error if the remote relations couldn't be watched.
  */
  watchLocalRelationChanges(params: Entities): Promise<RemoteRelationWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'WatchLocalRelationChanges',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchRemoteApplicationRelations starts a StringsWatcher for watching the relations of
    each specified application in the local model, and returns the watcher IDs
    and initial values, or an error if the services' relations could not be
    watched.
  */
  watchRemoteApplicationRelations(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'WatchRemoteApplicationRelations',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchRemoteApplications starts a strings watcher that notifies of the addition,
    removal, and lifecycle changes of remote applications in the model; and
    returns the watcher ID and initial IDs of remote applications, or an error if
    watching failed.
  */
  watchRemoteApplications(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'WatchRemoteApplications',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchRemoteRelations starts a strings watcher that notifies of the addition,
    removal, and lifecycle changes of remote relations in the model; and
    returns the watcher ID and initial IDs of remote relations, or an error if
    watching failed.
  */
  watchRemoteRelations(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelations',
        request: 'WatchRemoteRelations',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default RemoteRelationsV2;
