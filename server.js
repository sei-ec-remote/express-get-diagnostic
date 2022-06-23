const express = require('express')
const http = require('http')
const router = require('./exercises/express-get')

const app = new express()

app.use('/', router.router)

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
