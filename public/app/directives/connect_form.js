angular.module('topSecret')
.directive('connectForm', function($http) {
  return {
    restrict: 'E',
    templateUrl: './app/directives/connect_form.html',
    controller: function($scope,$http) {

      $scope.submitForm = function(connect) {
        console.log('form submitted...');
        // return http.get({
        //   method: 'POST',
        //   url: '',
        //   data: connect
        // }).then( function(response) {
        //   return response.data;
        // })
      }
    } /* end of controller */
  } /* end of return object */
})
