angular.module("topSecret")
.controller("homeController", function($scope, $stateParams, $window, $timeout) {

    let homeCasePara = document.getElementById('parallax-holder-thingy');
    let homeWorkPara = document.getElementById('work');
    let homeCapPara = document.getElementById('capabilities');
    let homeConPara = document.getElementById('connect');

   $window.onscroll = function(){

       let paraAmount = window.pageYOffset;
       // console.log(paraAmount);

       let paraStart = paraAmount * 0.20 - 200;

       homeCasePara.style.top = paraStart + 'px';

   };


    //you HAVE to have the fluid initializer in a timeout,
    //otherwise the gold-outline directive doesn't work
    $timeout(
        function fluidInit(){
        $window.FluidEffect.init();
        $window.FluidEffect.start();
    }, 0);

});
