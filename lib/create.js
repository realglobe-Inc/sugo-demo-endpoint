/**
 * Demo of sugo endpoint
 * @function sugoDemoEndpoint
 * @param {object} [options] - Optional settings.
 * @returns {function} - Defined app function.
 */

'use strict'

const co = require('co')
const debug = require('debug')('sugo:demo:endpoint')

/** @lends sugoDemoEndpoint */
function create (options = {}) {
  let endpoint = co.wrap(function * middleware (ctx) {
    debug('handle')
    ctx.body = '__endpoint_result__'
  })

  Object.assign(endpoint, {
    /**
     * Description of this middleware.
     */
    $desc: '__your_endpoint_description__'
  })

  return endpoint
}

module.exports = create
