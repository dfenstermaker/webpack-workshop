var server = require('webpack-dev-server'),
    config  = require('./webpack.config.js'),
    path    = require('path'),
    webpack = require('webpack'),
    _       = require('lodash');

var devConfig = _.extend(config, {
    watch: true,
    port: 8000
})

var compiler = webpack(devConfig);

var webserver = new server(compiler, {
    stats: {colors: true}
});

webserver.use('/', function(req, res) {
  res.sendFile(path.join( __dirname + "/dist/index.html"));
})

webserver.listen(devConfig.port, '0.0.0.0', function () {});

console.log('Running on port ' + devConfig.port);
