// create by Khayyam Jones

angular.module("topSecret")
.directive('linkArrow', function() {
  return {
    restrict: 'A',
    transclude: true,
    template: `<div width=100% ng-transclude id='goldenLine' ng-class="{'goldenLine': isActive}" ng-mouseenter='toggleLine()' ng-mouseleave='toggleLine()'><ng-transclude></ng-transclude></div>`,
    link: function(scope, elem, attrs) {
      const line = document.getElementById('goldenLine');
      scope.isActive = false;
      scope.toggleLine = function() {
        scope.isActive = !scope.isActive;

      }

    }
  };
});
