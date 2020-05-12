const pino = require('pino');

const logger = pino({
  customLevels: {
    foo: 35
  },
  // level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'debug'
});
console.log(`basic log from console.`);
logger.info(`from pino info.`);
logger.debug(`from pino info with debug method.`);
logger.foo(`from pino info with custom method.`);
