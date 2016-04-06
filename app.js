console.log('ola mundo');

var modulo = require('./helloNode.js');

modulo.first();

console.log(modulo.second);

var logger = require('./logger');

logger.log('logger na area.');