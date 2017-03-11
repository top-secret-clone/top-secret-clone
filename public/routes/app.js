angular.module("topSecret", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './home/home.html',
    controller: './home/home.js'
  })
  .state('caseStudies', {
    url: '/caseStudies',
    templateUrl: './caseStudies/caseStudies.html',
    controller: './caseStudies/caseStudies.js'
  })
  .state('work', {
    url: '/work',
    templateUrl: './work/work.html',
    controller: './work/work.js'
  })
  .state('about', {
    url: '/about',
    templateUrl: './about/about.html',
    controller: './about/about.js'
  })
  .state('capabilities', {
    url: '/capabilities',
    templateUrl: './capabilities/capabilities.html',
    controller: './capabilities/capabilities.js'
  })
  .state('connect', {
    url: '/connect',
    templateUrl: './connect/connect.html',
    controller: './connect/connect.js'
  })

});
