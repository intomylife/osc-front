'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"stage"',
  VUE_APP_BASE_API: '"/api"',
  VUE_APP_BASE_URL: '"/baseService"'
})
