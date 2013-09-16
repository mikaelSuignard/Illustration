module.exports = function(config) {
    config.set({
      // your config


basePath : '../',
frameworks : ["jasmine"],
files : [
  //JASMINE,
  //JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
],

//Enable or disable watching files and executing the tests whenever one of these files changes.
autoWatch : false,

//If true, Karma will start and capture all configured browsers, run tests and then exit with an exit code of 0 or 1 depending on whether all tests passed or any tests failed.
singleRun : true,

browsers : ['Chrome'],

junitReporter : {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
},

preprocessors : {
    'app/scripts/**/*.js': 'coverage'
},

reporters : ['progress', 'junit', 'coverage'],

junitReporter : {
    outputFile: 'target/test-reports/unit.xml',
    suite: 'unit'
},
coverageReporter : {
    type : 'cobertura',
    dir : 'target/coverage/'
}


    });
  };
