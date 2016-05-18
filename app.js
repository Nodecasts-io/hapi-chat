'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 3000 })
server.register(require('vision'), (err) => {
  if (err)
    throw err

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'views'
  })
})

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('index')
    }
})

server.start((err) => {
    if (err)
			throw err

		console.log('Server running at:', server.info.uri)
})
