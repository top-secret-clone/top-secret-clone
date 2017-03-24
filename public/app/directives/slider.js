angular.module("topSecret").directive('slider', function() {
  return {
    restrict: 'E',
    templateUrl: './app/directives/sliderTmpl.html',
    link: function(scope, element, att) {
      $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        appendArrows: $('.slider-arrows'),
        appendDots: $('.slider-buttons')
      });
    }
  }
});
