'use strict'

const koa = require('koa')
const logger = require('koa-logger')
const jsonp = require('koa-response-jsonp')
const v1 = require('./src/api/v1')

const PORT = process.env.PORT || 2400
const app = koa()

jsonp(app)

app.use(logger())

app.use(v1.routes())

app.use(function* () {
  this.body = {
    error: true,
    message: '404 Not Found',
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})