const gateway = require('fast-gateway')
const server = gateway({
    routes: [{
        prefix: '/lumen',
        target: 'http://127.0.0.1:3000'
    }]
})

server.start(8080)

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

const service = require('restana')()

service.get('/*', (req, res, next) => {
    next()
},
    (req, res) => {
        proxy.web(req, res, { target: 'http://localhost:3300' })
    })

service.start(3000)