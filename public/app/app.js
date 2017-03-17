angular.module("topSecret", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/routes/home/home.html',
    controller: 'homeController'
  })
  .state('caseStudies', {
    url: '/caseStudies',
    templateUrl: './app/routes/caseStudies/caseStudies.html',
    controller: 'caseStudiesController'
  })
  .state('work', {
    url: '/work',
    templateUrl: './app/routes/work/work.html',
    controller: 'workController'
  })
  .state('about', {
    url: '/about',
    templateUrl: './app/routes/about/about.html',
    controller: 'aboutController'
  })
  .state('capabilities', {
    url: '/capabilities',
    templateUrl: './app/routes/capabilities/capabilities.html',
    controller: 'capabilitiesController'
  })
  .state('connect', {
    url: '/connect',
    templateUrl: './app/routes/connect/connect.html',
    controller: 'connectController'
  })
  .state('404', {
    url: '/404',
    templateUrl: './app/routes/404/404.html',
    controller: '404Controller'
  })
  .state('admin', {
    url: '/admin',
    templateUrl: './app/routes/admin/admin.html',
    controller: 'adminController',
    resolve: {
        user: function(authService, $state) {
          return authService.getCurrentUser().then(function(response) {
            if (!response.data)
              $state.go('login');
            return response.data;
          }).catch(function(err) {
            $state.go('login');
          });
        }
      }
  })

});
