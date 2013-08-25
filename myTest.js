var server = require('karma').server;
server.start({port: 9876}, function(exitCode) {
  console.log('Karma has exited with ' + exitCode);
  process.exit(exitCode);
});
