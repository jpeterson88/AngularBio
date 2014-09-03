"use strict";

var bioApp = angular.module('bioApp', [
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate',
  'ajoslin.promise-tracker'
]);

bioApp.animation('.show-hide-animation', function() {
  return {
    beforeAddClass : function(element, className, done) {
      if(className == 'ng-hide') {
        jQuery(element).animate({
          opacity:0
        }, done);
      }
      else {
        done();
      }
    },
    removeClass : function(element, className, done) {
      if(className == 'ng-hide') {
        element.css('opacity',0);
        jQuery(element).animate({
          opacity:1
        }, done);
      }
      else {
        done();
      }
    }
  };
});


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