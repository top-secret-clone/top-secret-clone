angular.module('topSecret')
.directive('connectForm', function($http) {
  return {
    restrict: 'E',
    // scope: {
    //
    // },
    templateUrl: './app/directives/connect_form.html',
    // link: function (scope, elem, attrs) {
    //
    // }, /* end of Link function */
    controller: function($http) {
      this.submitForm = function(connect) {
        return http.get({
          method: 'POST',
          url: '',
          data: connect
        }).then( function(response) {
          return response.data;
        })
      }
    }
  } /* end of return object */
})
