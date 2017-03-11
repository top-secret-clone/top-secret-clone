angular.module("topSecret", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './home/home.html',
    controller: 'homeController'
  })
  .state('caseStudies', {
    url: '/caseStudies',
    templateUrl: './caseStudies/caseStudies.html',
    controller: 'caseStudiesController'
  })
  .state('work', {
    url: '/work',
    templateUrl: './work/work.html',
    controller: 'workController'
  })
  .state('about', {
    url: '/about',
    templateUrl: './about/about.html',
    controller: 'aboutController'
  })
  .state('capabilities', {
    url: '/capabilities',
    templateUrl: './capabilities/capabilities.html',
    controller: 'capabilitiesController'
  })
  .state('connect', {
    url: '/connect',
    templateUrl: './connect/connect.html',
    controller: 'connectController'
  })

});
