angular.module("topSecret")
.controller("homeController", function($scope, $stateParams, $window, $timeout) {

    let homeCasePara = document.getElementById('parallax-holder-thingy');
    let homeWorkPara = document.getElementById('work');
    let homeCapPara = document.getElementById('capabilities');
    let homeConPara = document.getElementById('connect');

   $window.onscroll = function(){

       let paraAmount = window.pageYOffset;

       let paraStartCase = paraAmount * 0.20 - 200;

       homeCasePara.style.top = paraStartCase + 'px';

       let paraStartWork = paraAmount - 1550 - 133;

       homeWorkPara.style.top = paraStartWork + 'px';
       homeCapPara.style.top = paraStartWork + 'px';
       homeConPara.style.top = paraStartWork + 'px';


   };

   $window.onclick = function(){
     let para = window.pageYOffset;
     console.log(para);
   };

    //you HAVE to have the fluid initializer in a timeout,
    //otherwise the gold-outline directive doesn't work
    $timeout(
        function fluidInit(){
        $window.FluidEffect.init();
        $window.FluidEffect.start();
    }, 0);

});
