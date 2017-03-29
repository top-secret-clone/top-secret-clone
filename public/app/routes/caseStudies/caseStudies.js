angular.module("topSecret")
.controller("caseStudiesController", function($scope, $stateParams, $window){

    window.onclick = function(){
        console.log(window.pageYOffset)
    };

    let paraOregon = document.getElementById('oregon');
    let paraCreed = document.getElementById('creed');
    let paraRossi = document.getElementById('rossi');
    let paraPublik = document.getElementById('publik');
    let paraPeli = document.getElementById('peli');

    window.onscroll = function(){

        let csParaStart = window.pageYOffset;

        if(csParaStart > 0 && csParaStart < 1550){
            paraOregon.style.backgroundPositionY = 60 - csParaStart * 0.06 + '%';   //  do the oregon parallax
        } if(csParaStart > 400 && csParaStart < 2000){
            paraCreed.style.backgroundPositionY = 180 - csParaStart * 0.10 + '%';  //  do the creed parallax
        } if(csParaStart > 900 && csParaStart < 2500){
            paraRossi.style.backgroundPositionY = 120 - csParaStart * 0.04 + '%';  //  do the rossi parallax
        } if(csParaStart > 1400 && csParaStart < 3000){
            paraPublik.style.backgroundPositionY = 150 - csParaStart * 0.06 + '%';  //  do the publik parallax
        } if(csParaStart > 1900 && csParaStart <= 3178){
            paraPeli.style.backgroundPositionY = 150 - csParaStart * 0.04 + '%';  //  do the peli parallax
        }
    }

});
