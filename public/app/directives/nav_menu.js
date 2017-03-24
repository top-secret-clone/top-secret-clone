angular.module('topSecret')
.directive('menuDir', function() {
  return {
    restrict: 'E',
    templateUrl: './app/directives/nav_menu.html',
    link: function(scope, elem, attrs) {
      scope.menuDisplay = false;
      // const rgbaActive = 'rgba(0,0,0,0.9)';
      // const rgbaInactive = 'rgba(0,0,0,0)';
      const
        overlayActive = {
          'background-color': 'rgba(0,0,0,0.9)'
        },
        overlayInactive = {
          'background-color': 'rgba(0,0,0,0)'
        },
        contentActive = {
          top: '10%'
        },
        contentInactive = {
          top: '110%'
        };
      scope.navMenu = function() {
        scope.menuDisplay = !scope.menuDisplay;
        scope.menuDisplay ? scope.css = overlayActive :
          scope.css = overlayInactive;
        scope.menuDisplay ? scope.cssContent = contentActive :
          scope.cssContent = contentInactive;
      } /* end of navMenu toggle function */

      // setInterval(function() {
      //   console.log('Timeout function...')
      //   var bar1 = Math.random() * 10 + 1;
      //   var bar2 = Math.random() * 10 + 1;
      //   var bar3 = Math.random() * 10 + 1;
      //   scope.animateBar1 = {height: `${bar1}px`};
      //   console.log(`${bar1}px`);
      //   scope.animateBar2 = {height: `${bar2}px`};
      //   scope.animateBar3 = {height: `${bar3}px`};
      // },1000);
    },
    controller: function($scope,$interval) {
      var audioOn = true;
      $scope.audioToggle = function() {
        audioOn = !audioOn;
        console.log('Audio: ',audioOn)
      }

          $interval(function() {
            console.log('Timeout function...')
            var bar1 = Math.random() * 10 + 4;
            var bar2 = Math.random() * 10 + 4;
            var bar3 = Math.random() * 10 + 4;
            if (audioOn) {
              $scope.animateBar1 = {height: `${bar1}px`};
              $scope.animateBar2 = {height: `${bar2}px`};
              $scope.animateBar3 = {height: `${bar3}px`};
            }
            else {
              $scope.animateBar1 = {height: `2px`};
              $scope.animateBar2 = {height: `2px`};
              $scope.animateBar3 = {height: `2px`};
            }
          },150);

      $scope.menuItems = [
        {
          index: 1,
          name: 'HOME',
          route: '/'
        },
        {
          index: 2,
          name: 'CASE STUDIES',
          route: 'caseStudies'
        },
        {
          index: 3,
          name: 'WORK',
          route: 'work'
        },
        {
          index: 4,
          name: 'ABOUT',
          route: 'about'
        },
        {
          index: 5,
          name: 'CAPABILITIES',
          route: 'capabilities'
        },
        {
          index: 6,
          name: 'CONNECT',
          route: 'connect'
        }
      ]
    }
  }
})
