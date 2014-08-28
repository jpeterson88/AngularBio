var bioApp = angular.module('bioApp', [
  'ngRoute',
  'viewControllers'
]);


bioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      }).
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      }).
     when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      }).
     when('/gaming', {
        templateUrl: 'views/gaming.html',
        controller: 'GamingController'
      }).
     when('/photography', {
        templateUrl: 'views/photography.html',
        controller: 'PhotographyController'
      }).   
     when('/software', {
        templateUrl: 'views/software.html',
        controller: 'SoftwareController'
      }). 

      otherwise({
        redirectTo: '/about'
      });
    }]);