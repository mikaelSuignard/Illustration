'use strict';

/* Controllers */
angular.module('Illustration.controllers', [])
.controller('IllustrationCtrl', IllustrationController)
.controller('ImagesCtrl', ImagesController)
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

var ImagesController = function ($scope, $http) {
	
	// Initialisation du tableau images
    $scope.images = [];
    $scope.imgCourante = "";
    
    $scope.go = function(image) {
		$scope.imgCourante = image;
		console.log("ImagesController : nouvelle image" + $scope.imgCourante.legende);
		
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		var img=document.getElementById($scope.imgCourante.partial);
		
		//canvas.width=div.scrollWidth
		//canvas.height=div.scrollHeight -->
		
		c.width  = window.innerWidth /2;
		c.height = window.innerHeight /2;
		ctx.scale(0.2,0.2);
		ctx.drawImage(img,10,10);
	}
    
    // On va chercher dans l'API github pour peupler le tableau
    // tableau Json : ressource ...
    //$http.get('http://localhost:8001/app/img/liste_PhareMontage.json')
    $http.get('/app/img/liste_PhareMontage.json')
        .success(function(data) {
            $scope.repos = data.repositories;
            $scope.images = data.images;
        });
    console.log("ImagesController : Projet Illustration");
	console.log("ImagesController" + $scope.repos);
	console.log("ImagesController" + $scope.images);
}

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




