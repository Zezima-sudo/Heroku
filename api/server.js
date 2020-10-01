const express = require('express')

const server = express ()

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello node34',
        environment: process.env.PORT
    })
})

module.exports = server

