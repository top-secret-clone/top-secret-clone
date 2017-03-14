angular.module("topSecret")
.controller("homeController", function($scope, $stateParams, $window) {

    function fluidInit(){
        $window.FluidEffect.init();
        $window.FluidEffect.start();
    }

    $window.onload(fluidInit());



});
