const config = require('./profiles/web-app')

config.env = {
  ...config.env,
  node: true
}

module.exports = config