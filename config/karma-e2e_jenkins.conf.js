module.exports = function(config) {
    config.set({
      // your config

basePath : '../',

files : [
//  ANGULAR_SCENARIO,
//  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
],

frameworks : ["ng-scenario"],

autoWatch : false,

browsers : ['Chrome'],

singleRun : true,

proxies : {
  '/': 'http://localhost:8001/'
},

junitReporter : {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
}
    });
  };
