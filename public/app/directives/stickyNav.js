angular.module("topSecret").directive('stickyNav', function() {
  return {
    restrict: 'EA',
    templateUrl: './directives/stickyNavTmpl.html',
    contoller: function($scope){
      $scope.showNav = false;
    },
    link: function(scope, element, att) {
      var distance = $(".sticky-nav").offset().top;
      console.log(distance);
        $(window).scroll(function(){
          var scrollPosition = $(this).scrollTop();
          console.log(scrollPosition)
          if(scrollPosition > distance){
            $(".sticky-nav").addClass('fix');
          } else {
            $(".sticky-nav").removeClass('fix');
          }
        })
   }
  };
});
