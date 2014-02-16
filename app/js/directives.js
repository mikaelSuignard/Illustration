'use strict';

// do not work :
//angular.module('Illustration.directives', [])
//.directive("ngFileSelect", ngFileSelectDirective)
//.directive('appVersion', appVersionDirective)
//;

angular.module('Illustration.directives', [])
.directive("ngFileSelect",function(){
	 console.log("directive ngFileSelect");
  return {
    link: function($scope,el){
		console.log("directive ngFileSelect : link");
      el.bind("change", function(e){
		  console.log("directive ngFileSelect : link change");
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      })
    }
  }
})
.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
}])
;
