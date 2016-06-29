/** This is example of client */

'use strict'

const sgAgentBase = require('sg-agent-base')
const co = require('co')

co(function * () {
  let knocked = yield sgAgentBase('/foo/bar').knock()
  /* .. */
}).catch((err) => console.error(err))
