angular.module("topSecret").directive('stickyNav', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/stickyNavTmpl.html',
    link: function(scope, element, att) {
      var distance = $("sticky-nav").offset().top;
        $(window).scroll(function(){
          var scrollPosition = $(this).scrollTop();
          if(scrollPosition > distance){
            $("sticky-nav").addClass('fix');
            $(".home-nav").addClass('fix');
          } else {
            $("sticky-nav").removeClass('fix');
            $(".home-nav").removeClass('fix');
          }
        })
   }
  };
});
