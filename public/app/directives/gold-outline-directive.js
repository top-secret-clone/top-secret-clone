/**
 * Created by Seth on 3/15/2017.
 */
angular.module('topSecret').directive('goldOutline', function(){


    return {
        restrict: 'E',
        template: '<div class="gold-outline-container" style="z-index: 10; position: absolute; height: 40vh; width: 28vw">' +
            '<div id="gold-top-right" style="margin-top: 10px; margin-left: 14vw; width: 0; height: 2px; background-color: #88714d"></div>' +
            '<div id="gold-right" style="width: 2px; height: 0; background-color: #88714d; margin-left: 507px; margin-top: -2px"></div>' +
            '<div id="gold-bottom" style="width: 0; height: 2px; background-color: #88714d; margin-top: -2px; margin-left: 12px"></div>' +
            '<div id="gold-left" style="width: 2px; height: 0; background-color: #88714d; margin-top: -365px; margin-left: 11px"></div>' +
            '<div id="gold-top-left" style="width: 0; height: 2px; background-color: #88714d; margin-left: 12px; margin-top: -365px"></div>' +
         '</div>',
        link: function(scope, element, attributes){

            // scope.worm = function(){
            //     console.log('yo');
            //     // TweenMax.to($('.gold-top-right'), 0.5, {width: '249px'});
            //     // TweenMax.to($('.gold-right'), 0.5, {delay: '0.5',height: '365px'});
            //     // TweenMax.to($('.gold-bottom', 0.5, {delay: '1', width: '497px'}));
            //     // TweenMax.to($('.gold-left'), 0.5, {delay: '1.5', height: '365px'});
            //     // TweenMax.to($('.gold-top-left'), 0.5, {delay: '2', width: '255px'});
            // };

        }
    }
});