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
        console.log('navMenu toggled', scope.menuDisplay);
        scope.menuDisplay = !scope.menuDisplay;
        scope.menuDisplay ? scope.css = overlayActive :
          scope.css = overlayInactive;
        scope.menuDisplay ? scope.cssContent = contentActive :
          scope.cssContent = contentInactive;
        // menuDisplay ? $('#myNav').css('width', '100vw') :
        // $('#myNav').css('width', '0vw');
        // menuDisplay ? $('#myNav').css('background-color', rgbaActive) :
        // $('#myNav').css('background-color', rgbaInactive);
      }
    },
    controller: function($scope) {
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
