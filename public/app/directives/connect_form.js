angular.module('topSecret')
.directive('connectForm', function($http) {
  return {
    restrict: 'E',
    templateUrl: './app/directives/connect_form.html',
<<<<<<< HEAD
    // link: function (scope, elem, attrs) {
    //
    // }, /* end of Link function */
    controller: function($scope,$http) {

=======
    controller: function($scope,$http) {
>>>>>>> 4a9f56425553cbfec00e88d4a502db26d44ff27d
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
