angular.module("topSecret")
.controller("aboutController", function($scope, $stateParams, aboutService){
  $scope.clientsServed = aboutService.clientsServed;
})
