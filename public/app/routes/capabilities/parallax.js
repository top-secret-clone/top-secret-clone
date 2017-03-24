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
      const adjustedViewHeight = height < 775 ? 775 - height : 0;
      const start = parseInt(scope.start);
      const startPosition = height < 775 ? start - (775 - height): start;
      const section = `.${scope.foo}`;
      $(section).css('top', startPosition);



      const elementTable = {
        element: scope.foo,
        window: height,
        adjust: 775 - height,
        start: parseInt(scope.start),
        animationBegin: parseInt(scope.start),
        animationEnd: parseInt(scope.start) + 450
      }
      // console.log(elementTable);
      // console.log(section,' start: ', start);

      setTimeout(function() {
        $(window).scroll( () => {
          var scrollTop = pageYOffset;
          // var adjustedViewHeight = height < 775 ? 775 - height : 0;
          var startAnimation = start + adjustedViewHeight;
          var endAnimation = startAnimation + 450;
          var scrollCounter = scrollTop - startAnimation;
          var entryOpacity = scrollCounter > 0 && scrollCounter <= 100 ? scrollCounter / 100 : 1;
          var exitOpacity = scrollCounter > 450 && scrollCounter <=500 ? (500 - scrollCounter) / 100 : 0;
          var parallaxAdjust = scrollCounter > 0 && scrollCounter < 550 ? ((scrollCounter / 1100) + 0.75) * -1 : -1;
          scope.parallaxScroll = (scrollTop - startAnimation) * parallaxAdjust;
          // console.log('parallaxScroll',scope.parallaxScroll);
          // console.log(section, '-> scroll: ',scrollTop, 'startAnimation: ', startAnimation, 'endAnimation: ', endAnimation, 'viewPort Count: ', scrollCounter, 'Parallax Adjust: ', parallaxAdjust);

          /* while item is on screen */
          if (scrollTop > startAnimation && scrollTop <= endAnimation) {
          var translate = 'translateY('+scope.parallaxScroll+'px)'
          $(section).addClass('test');
          $(section).css('transform', translate);
          $(section).css('opacity', entryOpacity);
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
            $(section).css('opacity', exitOpacity);
          }
        });
      },0) /* end timeout function */
    }  /* end Link function */
  }
})
