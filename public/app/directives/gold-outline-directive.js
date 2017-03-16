/**
 * Created by Seth on 3/15/2017.
 */
angular.module('topSecret').directive('goldOutline', function(){


    return {
        restrict: 'E',
        templateUrl: './app/directives/gold-outline.html',
        scope: {
            cname: '='
        },
        controller: function($scope){

            let minusHeight;
            let minusWidth;
            let minusWidth2;
            let rightWidth;
            let topRight;
            let parentHeight;
            let parentWidth;
            setTimeout(function() {
                minusHeight = document.getElementsByClassName($scope.cname)[0].parentElement.parentElement.clientHeight * .15;
                minusWidth = (document.getElementsByClassName($scope.cname)[0].parentElement.parentElement.clientWidth * .05);
                minusWidth2 = (document.getElementsByClassName($scope.cname)[0].parentElement.parentElement.clientWidth * .10);
                rightWidth = document.getElementsByClassName($scope.cname)[0].parentElement.parentElement.clientWidth - minusWidth2 + 'px';
                topRight =(document.getElementsByClassName($scope.cname)[0].parentElement.parentElement.clientWidth / 2) - minusWidth + 'px';
                parentHeight = (document.getElementsByClassName($scope.cname)[0].parentElement.parentElement.clientHeight - minusHeight) + 'px';
                parentWidth = document.getElementsByClassName($scope.cname)[0].parentElement.parentElement.clientWidth + 'px';
            }, 0);

            $scope.worm = function () {
                setTimeout(function () {
                    console.log('WHERE ARE YOU??????????')
                    TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[1], 0.25, {width: topRight});
                    TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[3], 0.25, {
                        delay: 0.25,
                        height: parentHeight
                    });
                    TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[5], 0.25, {
                        delay: 0.5,
                        width: rightWidth
                    });
                    TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[7], 0.25, {
                        delay: 0.75,
                        height: parentHeight
                    });
                    TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[9], 0.25, {
                        delay: 1,
                        width: topRight
                    });
                }, 0)
            };

            $scope.reverseWorm = function(){
                setTimeout( function(){
                TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[9], 0.25, {width: 0});
                TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[7], 0.25, {delay: 0.25, height: 0});
                TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[5], 0.25, {delay: 0.5, width: 0});
                TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[3], 0.25, {delay: 0.75, height: 0});
                TweenMax.to(document.getElementsByClassName($scope.cname)[0].childNodes[1], 0.25, {delay: 1, width: 0});
            }, 1250)
            }
        }

    }
});