'use strict';

/* Controllers */

function IllustrationCtrl($scope) {
	console.log("Projet Illustration",$scope.projet)
	$scope.phones = [
		{"name": "Nexus S",
		"snippet": "Fast just got faster with Nexus S."},
		{"name": "Motorola XOOM™ with Wi-Fi",
		"snippet": "The Next, Next Generation tablet."},
		{"name": "MOTOROLA XOOM™",
		"snippet": "The Next, Next Generation tablet 3."},
		{"name": "MOTOROLA XOOM™",
		"snippet": "The Next, Next Generation tablet."}
	];
	$scope.hello = "Hello, World!"
}


