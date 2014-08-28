"use strict";

var bioApp = angular.module('bioApp', [
  'ngRoute'
]);


bioApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
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
    });