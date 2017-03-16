angular.module("topSecret")
.controller("homeController", function($scope, $stateParams, $window) {

    $scope.theWorm = function(){
        console.log('yo');
        // TweenMax.to($('.gold-top-right'), 0.5, {width: '249px'});
        // TweenMax.to($('.gold-right'), 0.5, {delay: '0.5',height: '365px'});
        // TweenMax.to($('.gold-bottom', 0.5, {delay: '1', width: '497px'}));
        // TweenMax.to($('.gold-left'), 0.5, {delay: '1.5', height: '365px'});
        // TweenMax.to($('.gold-top-left'), 0.5, {delay: '2', width: '255px'});
    };

    // function fluidInit(){
    //     $window.FluidEffect.init();
    //     $window.FluidEffect.start();
    // }
    //
    // $window.onload(fluidInit());



});
