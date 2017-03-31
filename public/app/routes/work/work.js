angular.module("topSecret")
.controller("workController", function($scope){

  $scope.showNav = false;

  $scope.showSection = 'all';

  $scope.showAll = function(section){
    $scope.showSection = section;
    console.log("clicked");
  }

})
