'use strict'

const Router = require('koa-router')

const router = new Router({
  prefix: '/v1',
})

router.use(function* (next) {
  const { callback } = this.query
  if (!callback) {
    this.body = {
      error: true,
      message: 'You should deliver the ?callback parameter',
    }
    return
  }
  yield next
})

router.get('/', function* () {
  this.jsonp({
    description: 'jsonp api endpoint',
  })
})

router.get('/demonstration', function* () {
  this.jsonp({
    message: 'A demo response',
  })
})

module.exports = router