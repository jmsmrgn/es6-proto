const budo = require('budo')
const babelify = require('babelify')

budo('./index.js', {
  live: true,
  stream: process.stdout,
  host: 'localhost',
  port: 7777,
  open: true,
  pushstate: true,
  browserify: {
    transform: babelify
  }
})
