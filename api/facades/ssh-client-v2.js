/**
  Juju SSHClient version 2.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Tue 2018/11/27 16:23:14 UTC. Do not manually edit this file.
*/

'use strict';

const {autoBind, createAsyncHandler} = require('../transform.js');

/**
  Facade implements the API required by the sshclient worker.
*/
class SSHClientV2 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 2;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    AllAddresses reports all addresses that might have SSH listening for each
    given entity in args. Machines and units are supported as entity types.
    TODO(wpk): 2017-05-17 This is a temporary solution, we should not fetch
    environ here but get the addresses from state. We will be changing it
    since we want to have space-aware SSH settings.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          entities: []{
            tag: string
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          results: []{
            error: {
              message: string,
              code: string,
              info: {
                macaroon: anything,
                macaroonPath: string
              }
            },
            addresses: []string
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  allAddresses(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#Entities
      if (args) {
        params = {};
        params['entities'] = [];
        args.entities = args.entities || [];
        for (let i = 0; i < args.entities.length; i++) {
          // github.com/juju/juju/apiserver/params#Entity
          if (args.entities[i]) {
            params['entities'][i] = {};
            params['entities'][i]['tag'] = args.entities[i].tag;
          }
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'SSHClient',
        request: 'AllAddresses',
        version: 2,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#SSHAddressesResults
        if (resp) {
          result = {};
          result.results = [];
          resp['results'] = resp['results'] || [];
          for (let i = 0; i < resp['results'].length; i++) {
            // github.com/juju/juju/apiserver/params#SSHAddressesResult
            if (resp['results'][i]) {
              result.results[i] = {};
              // github.com/juju/juju/apiserver/params#Error
              if (resp['results'][i]['error']) {
                result.results[i].error = {};
                result.results[i].error.message = resp['results'][i]['error']['message'];
                result.results[i].error.code = resp['results'][i]['error']['code'];
                // github.com/juju/juju/apiserver/params#ErrorInfo
                if (resp['results'][i]['error']['info']) {
                  result.results[i].error.info = {};
                  // gopkg.in/macaroon.v2-unstable#Macaroon
                  result.results[i].error.info.macaroon = resp['results'][i]['error']['info']['macaroon'];
                  result.results[i].error.info.macaroonPath = resp['results'][i]['error']['info']['macaroon-path'];
                }
              }
              result.results[i].addresses = [];
              resp['results'][i]['addresses'] = resp['results'][i]['addresses'] || [];
              for (let i2 = 0; i2 < resp['results'][i]['addresses'].length; i2++) {
                result.results[i].addresses[i2] = resp['results'][i]['addresses'][i2];
              }
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    PrivateAddress reports the preferred private network address for one or
    more entities. Machines and units are supported.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          entities: []{
            tag: string
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          results: []{
            error: {
              message: string,
              code: string,
              info: {
                macaroon: anything,
                macaroonPath: string
              }
            },
            address: string
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  privateAddress(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#Entities
      if (args) {
        params = {};
        params['entities'] = [];
        args.entities = args.entities || [];
        for (let i = 0; i < args.entities.length; i++) {
          // github.com/juju/juju/apiserver/params#Entity
          if (args.entities[i]) {
            params['entities'][i] = {};
            params['entities'][i]['tag'] = args.entities[i].tag;
          }
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'SSHClient',
        request: 'PrivateAddress',
        version: 2,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#SSHAddressResults
        if (resp) {
          result = {};
          result.results = [];
          resp['results'] = resp['results'] || [];
          for (let i = 0; i < resp['results'].length; i++) {
            // github.com/juju/juju/apiserver/params#SSHAddressResult
            if (resp['results'][i]) {
              result.results[i] = {};
              // github.com/juju/juju/apiserver/params#Error
              if (resp['results'][i]['error']) {
                result.results[i].error = {};
                result.results[i].error.message = resp['results'][i]['error']['message'];
                result.results[i].error.code = resp['results'][i]['error']['code'];
                // github.com/juju/juju/apiserver/params#ErrorInfo
                if (resp['results'][i]['error']['info']) {
                  result.results[i].error.info = {};
                  // gopkg.in/macaroon.v2-unstable#Macaroon
                  result.results[i].error.info.macaroon = resp['results'][i]['error']['info']['macaroon'];
                  result.results[i].error.info.macaroonPath = resp['results'][i]['error']['info']['macaroon-path'];
                }
              }
              result.results[i].address = resp['results'][i]['address'];
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    Proxy returns whether SSH connections should be proxied through the
    controller hosts for the model associated with the API connection.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          useProxy: bool
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  proxy(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'SSHClient',
        request: 'Proxy',
        version: 2,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#SSHProxyResult
        if (resp) {
          result = {};
          result.useProxy = resp['use-proxy'];
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    PublicAddress reports the preferred public network address for one or more
    entities. Machines and units are suppored.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          entities: []{
            tag: string
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          results: []{
            error: {
              message: string,
              code: string,
              info: {
                macaroon: anything,
                macaroonPath: string
              }
            },
            address: string
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  publicAddress(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#Entities
      if (args) {
        params = {};
        params['entities'] = [];
        args.entities = args.entities || [];
        for (let i = 0; i < args.entities.length; i++) {
          // github.com/juju/juju/apiserver/params#Entity
          if (args.entities[i]) {
            params['entities'][i] = {};
            params['entities'][i]['tag'] = args.entities[i].tag;
          }
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'SSHClient',
        request: 'PublicAddress',
        version: 2,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#SSHAddressResults
        if (resp) {
          result = {};
          result.results = [];
          resp['results'] = resp['results'] || [];
          for (let i = 0; i < resp['results'].length; i++) {
            // github.com/juju/juju/apiserver/params#SSHAddressResult
            if (resp['results'][i]) {
              result.results[i] = {};
              // github.com/juju/juju/apiserver/params#Error
              if (resp['results'][i]['error']) {
                result.results[i].error = {};
                result.results[i].error.message = resp['results'][i]['error']['message'];
                result.results[i].error.code = resp['results'][i]['error']['code'];
                // github.com/juju/juju/apiserver/params#ErrorInfo
                if (resp['results'][i]['error']['info']) {
                  result.results[i].error.info = {};
                  // gopkg.in/macaroon.v2-unstable#Macaroon
                  result.results[i].error.info.macaroon = resp['results'][i]['error']['info']['macaroon'];
                  result.results[i].error.info.macaroonPath = resp['results'][i]['error']['info']['macaroon-path'];
                }
              }
              result.results[i].address = resp['results'][i]['address'];
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    PublicKeys returns the public SSH hosts for one or more entities. Machines
    and units are supported.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          entities: []{
            tag: string
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          results: []{
            error: {
              message: string,
              code: string,
              info: {
                macaroon: anything,
                macaroonPath: string
              }
            },
            publicKeys: []string
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  publicKeys(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#Entities
      if (args) {
        params = {};
        params['entities'] = [];
        args.entities = args.entities || [];
        for (let i = 0; i < args.entities.length; i++) {
          // github.com/juju/juju/apiserver/params#Entity
          if (args.entities[i]) {
            params['entities'][i] = {};
            params['entities'][i]['tag'] = args.entities[i].tag;
          }
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'SSHClient',
        request: 'PublicKeys',
        version: 2,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#SSHPublicKeysResults
        if (resp) {
          result = {};
          result.results = [];
          resp['results'] = resp['results'] || [];
          for (let i = 0; i < resp['results'].length; i++) {
            // github.com/juju/juju/apiserver/params#SSHPublicKeysResult
            if (resp['results'][i]) {
              result.results[i] = {};
              // github.com/juju/juju/apiserver/params#Error
              if (resp['results'][i]['error']) {
                result.results[i].error = {};
                result.results[i].error.message = resp['results'][i]['error']['message'];
                result.results[i].error.code = resp['results'][i]['error']['code'];
                // github.com/juju/juju/apiserver/params#ErrorInfo
                if (resp['results'][i]['error']['info']) {
                  result.results[i].error.info = {};
                  // gopkg.in/macaroon.v2-unstable#Macaroon
                  result.results[i].error.info.macaroon = resp['results'][i]['error']['info']['macaroon'];
                  result.results[i].error.info.macaroonPath = resp['results'][i]['error']['info']['macaroon-path'];
                }
              }
              result.results[i].publicKeys = [];
              resp['results'][i]['public-keys'] = resp['results'][i]['public-keys'] || [];
              for (let i2 = 0; i2 < resp['results'][i]['public-keys'].length; i2++) {
                result.results[i].publicKeys[i2] = resp['results'][i]['public-keys'][i2];
              }
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapSSHClient) {
  // Decorate the facade class in order to improve user experience.
  SSHClientV2 = wrappers.wrapSSHClient(SSHClientV2);
}

module.exports = SSHClientV2;