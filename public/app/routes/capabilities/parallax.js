angular.module("topSecret")
.directive("parallax", function($window) {
  return {
    restrict: 'A',
    scope: {
      start: '@',
      foo: '@className'
    },
    link: function (scope, elem, attrs) {
      var win = $(window);
      var start = parseInt(scope.start);
      var height = win.height();
      var top = -1 * height;
      var section = `.${scope.foo}`;


      $(window).scroll( () => {
        var scrollTop = pageYOffset;
        var adjustedViewHeight = height < 775 ? 775 - height + 50 : 50;
        var startAnimation = start + adjustedViewHeight;
        var endAnimation = startAnimation + height + 450;
        console.log(scrollTop, height, adjustedViewHeight, startAnimation, endAnimation);

/* while item is on screen */
        if (scrollTop > startAnimation && scrollTop < endAnimation) {
          console.log('In Viewport!', section, 'end animation: ', endAnimation);

        $(section).addClass('test');
        }


 /*
  * before item gets on screen
  * scrollTop (how far down the screen)
  * start = how far to get to bottom of Viewport
  * scrollTop - start = 0 is bottom of screen
  * plus adjustedViewHeight to display on the screen
  * before animations begin
  * var startAnimation = start + adjustedViewHeight;
  */
        else if (scrollTop < startAnimation){
          $(section).removeClass('test');
          console.log(section, 'Start Animation: ',startAnimation)
        }



 /*
  * after item leaves screen
  * scrollTop (how far down the screen)
  * start = how far to get to the bottom of the screen
  * height = distance to top of screen
  * scrollTop = start + height is when the top of the
  *   div reaches the top of the screen
  * scrollTop = start + height + 600 (height of div) is
  *   when the bottom of the screen reaches the top
  * var endAnimation = startAnimation + height + 450;
  *   450 because -50 from startAnimation and end with
  *   100px remaining on screen
  */
        else if (scrollTop > endAnimation){
          $(section).removeClass('test');
          console.log(section, 'End Animation: ', endAnimation)
        }
      });
    }
  }
})
