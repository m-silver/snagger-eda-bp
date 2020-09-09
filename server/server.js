const path = require('path')
const express = require('express')
const server = express()

const defects = require('./routes/defects')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/defects', defects)

module.exports = server
