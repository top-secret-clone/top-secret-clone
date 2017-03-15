angular.module("topSecret")
.directive("parallax", function($window) {
  return {
    restrict: 'A',
    scope: {
      start: '@',
      foo: '@className'
    },
    link: function (scope, elem, attrs) {
      var start = parseInt(scope.start);

      $(window).scroll( () => {
        var scrollTop = pageYOffset;
        console.log(start,scrollTop, start - scrollTop);
        if (start - scrollTop <= 0) {
          console.log('In Viewport!', scope.foo);
        $(scope.foo).addClass('test');
        }
        else if (start - scrollTop <= -775 || start - scrollTop > 0){
          console.log('remove class')
          $(scope.foo).removeClass('test')
        }
      });
    }
  }
})
