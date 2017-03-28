angular.module("topSecret")
.directive("parallax", function($window) {
  return {
    restrict: 'A',
    scope: {
      start: '@',
      foo: '@className',
      parallaxScroll: '='
    },
    link: function (scope, elem, attrs) {
      const win = $(window);
      const height = win.height(); /* calculate actual window height */
      const winWidth = win.width();
      const adjustedViewHeight = height < 775 ? 775 - height : 0;
      const start = parseInt(scope.start);
      const startPosition = height < 775 ? start - (775 - height): start;
      const section = `.${scope.foo}`;
      const elementTable = {
        element: scope.foo,
        window: height,
        adjust: 775 - height,
        start: parseInt(scope.start),
        animationBegin: parseInt(scope.start),
        animationEnd: parseInt(scope.start) + 450
      }

      if (winWidth > 750) { /* size of screen when media queries begin */
        console.log('adjusted start for full-screen effect');
        $(section).css('top', startPosition);
      }

      setTimeout(function() {
          $(window).scroll( () => {
            if (winWidth > 750) { /* if width < 750 don't run parallax function */
              console.log("winWidth > 750px");

              var scrollTop = pageYOffset;
              var startAnimation = start + adjustedViewHeight;
              var endAnimation = startAnimation + 450;
              var scrollCounter = scrollTop - startAnimation;
              var entryOpacity = scrollCounter > 0 && scrollCounter <= 100 ? scrollCounter / 100 : 1;
              var exitOpacity = scrollCounter > 450 && scrollCounter <=500 ? (500 - scrollCounter) / 100 : 0;
              var parallaxAdjust = scrollCounter > 0 && scrollCounter < 550 ? ((scrollCounter / 1100) + 0.75) * -1 : -1;

              scope.parallaxScroll = (scrollTop - startAnimation) * parallaxAdjust;

              /* while item is on screen */
              if (scrollTop > startAnimation && scrollTop <= endAnimation) {
                console.log('engaging parallax-->', section)
                var translate = 'translateY('+scope.parallaxScroll+'px)'
                $(section).addClass('test');
                $(section).css('transform', translate);
                $(section).css('opacity', entryOpacity);
              } /* end of if (scrollTop...) */


       /*
        * before item gets on screen
        */
              else if (scrollTop < startAnimation){
                $(section).removeClass('test');
              } /* end else if (scrollTop...) */



       /*
        * after item leaves screen
        */
              else if (scrollTop > endAnimation){
                $(section).removeClass('test');
                $(section).css('opacity', exitOpacity);
              } /* end else if (scrollTop...) */

            }
          }); /* end window scroll function */

      },0); /* end timeout function */

    }  /* end Link function */
  }
})
