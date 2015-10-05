module.exports = require('./scripts/webpack.base')({
  hotloader: true,
  serverPort: 4000,
  hotServerPort: 4001,
  env: 'development',
  target: 'web',
});


