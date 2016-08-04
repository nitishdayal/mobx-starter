/**
 * Bootstrap our server
 */
const sourceMaps = require('source-map-support')
sourceMaps.install()

require('./src/shared/polyfills')
require('./src/shared/bootstrap')
require('./src/shared/console')

require('babel-register')
require('isomorphic-fetch')
require('./src/server/index')

// Compile files on PROD or launch DEV server
if (process.env.NODE_ENV === 'production') {
    require('./configuration/webpack.prod.js')
} else {
    require('./configuration/webpack.dev.js')
}

process.on('unhandledRejection', function(err) {
    console.error(err)
})
