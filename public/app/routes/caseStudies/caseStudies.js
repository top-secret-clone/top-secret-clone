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

        if(csParaStart < 784){
            paraOregon.style.backgroundPositionY = csParaStart * 0.10+ '%';
        } else if(csParaStart < 1481){
        //    do the oregon parallax
        } else if(csParaStart < 1965){
            //do the creed parallax
        } else if(csParaStart < 2462){
            //do the Rossi parallax
        } else if(csParaStart < 2938){
            //do the publik parallax
        } else if(csParaStart > 2938){
            //do the Peli parallax
        }
    }

});
