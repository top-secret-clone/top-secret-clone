angular.module("topSecret").directive('stickyNav', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/stickyNavTmpl.html',
    contoller: function($scope){
      $scope.showNav = false;
    },
    link: function(scope, element, att) {
      var distance = $("sticky-nav").offset().top;
        $(window).scroll(function(){
          var scrollPosition = $(this).scrollTop();
          if(scrollPosition > distance){
            $("sticky-nav").addClass('fix');
            // $("sticky-nav").removeClass('sticky-nav')
          } else {
            $("sticky-nav").removeClass('fix');
            // $("sticky-nav").addClass('sticky-nav');
          }
        })
   }
  };
});
