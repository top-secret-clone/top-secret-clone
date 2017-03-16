angular.module("topSecret")
.controller("connectController", function($scope, $stateParams){
  $scope.test = 'connect'


  const height = $(window).height();
  console.log('win height ', height)
})
