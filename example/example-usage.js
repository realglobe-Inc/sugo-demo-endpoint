/** This is an example to use sugo-demo-endpoint */

'use strict'

const sgServer = require('sg-server')

const server = sgServer({
  middlewares: [
    /* ... */
  ],
  endpoints: {
    '/foo/bar': require('sugo-demo-endpoint')({
      // Options
    })
  }
})

server.listen(3000)

