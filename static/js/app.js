"use strict";

var bioApp = angular.module('bioApp', [
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'bootstrapLightbox'
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

bioApp.config(function (LightboxProvider) {
  // set a custom template
  LightboxProvider.templateUrl = 'lightbox.html';

  /**
   * Calculate the max and min limits to the width and height of the displayed
   *   image (all are optional). The max dimensions override the min
   *   dimensions if they conflict.
   * @param  {Object} dimensions Contains the properties windowWidth,
   *   windowHeight, imageWidth, imageHeight.
   * @return {Object} May optionally contain the properties minWidth,
   *   minHeight, maxWidth, maxHeight.
   */
  LightboxProvider.calculateImageDimensionLimits = function (dimensions) {
    return {
      'minWidth': 100,
      'minHeight': 100,
      'maxWidth': dimensions.windowWidth - 102,
      'maxHeight': dimensions.windowHeight - 136
    };
  };

  /**
   * Calculate the width and height of the modal. This method gets called
   *   after the width and height of the image, as displayed inside the modal,
   *   are calculated. See the default method for cases where the width or
   *   height are 'auto'.
   * @param  {Object} dimensions Contains the properties windowWidth,
   *   windowHeight, imageDisplayWidth, imageDisplayHeight.
   * @return {Object} Must contain the properties width and height.
   */
  LightboxProvider.calculateModalDimensions = function (dimensions) {
    return {
      'width': Math.max(500, dimensions.imageDisplayWidth + 42),
      'height': Math.max(500, dimensions.imageDisplayHeight + 76)
    };
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

   /*   $locationProvider.html5Mode(true);*/


    });