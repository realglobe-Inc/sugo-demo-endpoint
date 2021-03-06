/**
 * Demo of sugo endpoint
 * @module sugo-demo-endpoint
 * @version 1.0.14
 */

'use strict'

const create = require('./create')
const pkg = require('../package.json')

let lib = create.bind(this)

Object.assign(lib, create, {
 create,
 version: pkg.version
})

module.exports = lib
