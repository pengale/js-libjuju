/**
  Juju Payloads version 1.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Tue 2018/11/27 16:23:14 UTC. Do not manually edit this file.
*/

'use strict';

const {autoBind, createAsyncHandler} = require('../transform.js');

/**
  API serves payload-specific API methods.
*/
class PayloadsV1 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 1;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    List builds the list of payloads being tracked for the given unit and IDs.
    If no IDs are provided then all tracked payloads for the unit are
    returned.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          patterns: []string
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          results: []{
            class: string,
            type: string,
            id: string,
            status: string,
            labels: []string,
            unit: string,
            machine: string
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  list(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#PayloadListArgs
      if (args) {
        params = {};
        params['patterns'] = [];
        args.patterns = args.patterns || [];
        for (let i = 0; i < args.patterns.length; i++) {
          params['patterns'][i] = args.patterns[i];
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'Payloads',
        request: 'List',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#PayloadListResults
        if (resp) {
          result = {};
          result.results = [];
          resp['results'] = resp['results'] || [];
          for (let i = 0; i < resp['results'].length; i++) {
            // github.com/juju/juju/apiserver/params#Payload
            if (resp['results'][i]) {
              result.results[i] = {};
              result.results[i].class = resp['results'][i]['class'];
              result.results[i].type = resp['results'][i]['type'];
              result.results[i].id = resp['results'][i]['id'];
              result.results[i].status = resp['results'][i]['status'];
              result.results[i].labels = [];
              resp['results'][i]['labels'] = resp['results'][i]['labels'] || [];
              for (let i2 = 0; i2 < resp['results'][i]['labels'].length; i2++) {
                result.results[i].labels[i2] = resp['results'][i]['labels'][i2];
              }
              result.results[i].unit = resp['results'][i]['unit'];
              result.results[i].machine = resp['results'][i]['machine'];
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
if (wrappers.wrapPayloads) {
  // Decorate the facade class in order to improve user experience.
  PayloadsV1 = wrappers.wrapPayloads(PayloadsV1);
}

module.exports = PayloadsV1;