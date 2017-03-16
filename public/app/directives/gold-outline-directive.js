/**
 * Created by Seth on 3/15/2017.
 */
angular.module('topSecret').directive('goldOutline', function(){


    return {
        restrict: 'E',
        templateUrl: './app/directives/gold-outline.html',
        controller: function($scope){
            $scope.worm = function () {
                console.log('the worm....');
                TweenMax.to(document.getElementById('gold-top-right'), 0.5, {width: '249px'});
                        TweenMax.to(document.getElementById('gold-right'), 0.5, {delay: '0.5',height: '365px'});
                        TweenMax.to(document.getElementById('gold-bottom'), 0.5, {delay: '1', width: '497px'});
                        TweenMax.to(document.getElementById('gold-left'), 0.5, {delay: '1.5', height: '365px'});
                        TweenMax.to(document.getElementById('gold-top-left'), 0.5, {delay: '2', width: '255px'});
            }
        }
        // link: function(scope, element, attributes){
        //
        //
        //     element.on('mouseover', function(){
        //         console.log('yo');
        //         TweenMax.to($('.gold-top-right'), 0.5, {width: '249px'});
        //         TweenMax.to($('.gold-right'), 0.5, {delay: '0.5',height: '365px'});
        //         TweenMax.to($('.gold-bottom', 0.5, {delay: '1', width: '497px'}));
        //         TweenMax.to($('.gold-left'), 0.5, {delay: '1.5', height: '365px'});
        //         TweenMax.to($('.gold-top-left'), 0.5, {delay: '2', width: '255px'});
        //     });
        //
        // }
    }
});