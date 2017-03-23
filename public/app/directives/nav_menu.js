angular.module('topSecret')
.directive('menuDir', function() {
  return {
    restrict: 'E',
    templateUrl: './app/directives/nav_menu.html',
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
