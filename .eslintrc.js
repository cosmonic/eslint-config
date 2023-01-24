const baseConfig = require('./profiles/web-app')

const config = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
    node: true
  }
}

module.exports = config