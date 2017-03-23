angular.module("topSecret").directive('whoWeAre', function() {
  return {
    restrict: 'E',
    templateUrl: './app/directives/whoWeAre.html',
    // scope: {
    //   name: "=";
    // },
    controller: function($scope, aboutService) {
      $scope.bios = aboutService.bios;
      $scope.getBio = function(name){
        for (var i = 0; i < $scope.bios.length; i++) {
          if ($scope.bios[i].name == name) {
            $scope.name = $scope.bios[i].name;
            $scope.title = $scope.bios[i].title;
            $scope.bio = $scope.bios[i].bio;
            $scope.imageUrl = $scope.bios[i].imageUrl;
          }
        console.log(
        $scope.name,
        $scope.title,
        $scope.bio,
        $scope.imageUrl
      );
      }

      }
    },
    link: function(scope, element, attribute) {

    }
    // compile: function(){
    //   //The arrow directive needs to be appended here.
    // }
  }
});
