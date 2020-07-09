const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./router')


const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})



server.listen(process.env.PORT || 5000)
