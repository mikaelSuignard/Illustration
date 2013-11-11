'use strict';

/* Controllers */
angular.module('Illustration.controllers', [])
.controller('IllustrationCtrl', IllustrationController)
.controller('UploadCtrl', UploadController)
;

/* Controllers */
/*
angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);
*/

var IllustrationController = function ($scope) {
	console.log("IllustrationController : Projet Illustration");
	/*
	$scope.phones = [
		{"name": "Nexus S",
		"snippet": "Fast just got faster with Nexus S."},
		{"name": "Motorola XOOM™ with Wi-Fi",
		"snippet": "The Next, Next Generation tablet."},
		{"name": "MOTOROLA XOOM™",
		"snippet": "The Next, Next Generation tablet 3."},
		{"name": "MOTOROLA XOOM™",
		"snippet": "The Next, Next Generation tablet."}
	];*/
	$scope.hello = "Hello, World!";
	$scope.pages = [

		{name:"Phare",
		 sentence:"Réalisation d'un Phare",
		 templateUrl:'partials/PhareBD.html'},
		{name:"Dessins",
		sentence:"Dessins d'illustrations personnels",
		templateUrl: 'partials/dessins.html'},
		{name:"Broderie",
		sentence:"Broderie Mariage",
		templateUrl: 'partials/mariage.html'}
		];
		//<img ng-src="img/PhareMontage_1_idee.JPG"></img>
	console.log("IllustrationController : scope pages définies");
	console.log("IllustrationController" + $scope);
	/*	
	$http.get('img/')
        .success(function(data, status, headers, config) {
            if (data && status === 200) {
                $scope.images = data.split(',');
                console.log("images");
                console.log($scope.images);
            }
        });*/
};

var UploadController = function ($scope, fileReader) {
	console.log("UploadController : Projet Illustration");
	console.log("UploadController" + $scope);
    console.log(fileReader);
    
    $scope.getFile = function () {
		console.log("UploadController : getFile");
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                          console.log("UploadController : Result" + result);
                      });
    };
 
    $scope.$on("fileProgress", function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });
 
};


/*
function IllustrationCtrl($scope, $routeParams) {
	$scope.pageId = $routeParams.pageId;
}
* 
* 'use strict';
* */




