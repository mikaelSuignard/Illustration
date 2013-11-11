'use strict';

var applicationModule = angular.module('Illustration',
//tableau de dépendances vers les autres modules
[
  'ngRoute',
  'Illustration.controllers',
  'Illustration.directives',
  'Illustration.factories',
  'Illustration.services'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/Phare', {
				templateUrl: 'partials/PhareBD.html',
				controller: IllustrationController
				});
				/*.when('/phones/:phoneId',  */
	$routeProvider.when('/Dessins', {
				templateUrl: 'partials/dessins.html',
				controller: IllustrationController
				});
	$routeProvider.otherwise({redirectTo: '/#'});
}]);

//TODO :
/*
 *'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
* */
