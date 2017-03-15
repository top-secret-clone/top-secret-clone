angular.module("topSecret", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './routes/home/home.html',
    controller: 'homeController'
  })
  .state('caseStudies', {
    url: '/caseStudies',
    templateUrl: './routes/caseStudies/caseStudies.html',
    controller: 'caseStudiesController'
  })
  .state('work', {
    url: '/work',
    templateUrl: './routes/work/work.html',
    controller: 'workController'
  })
  .state('about', {
    url: '/about',
    templateUrl: './routes/about/about.html',
    controller: 'aboutController'
  })
  .state('capabilities', {
    url: '/capabilities',
    templateUrl: './app/routes/capabilities/capabilities.html',
    controller: 'capabilitiesController'
  })
  .state('connect', {
    url: '/connect',
    templateUrl: './routes/connect/connect.html',
    controller: 'connectController'
  })

});
