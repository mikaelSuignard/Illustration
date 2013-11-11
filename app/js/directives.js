'use strict';

angular.module('Illustration.directives', []).
 directive("ngFileSelect",function(){
	 console.log("directive ngFileSelect");
  return {
    link: function($scope,el){
      el.bind("change", function(e){
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      })
    }
  }
})

/* TODO
angular.module('Illustration.directives', []).
  directive('IllustrationFileSelect', ['version', function(version) {
    return function(scope, elm, attrs) {
      //elm.text(version);
      $scope.file = (elm.srcElement || elm.target).files[0];
      $scope.getFile();
    };
  }]);*/
