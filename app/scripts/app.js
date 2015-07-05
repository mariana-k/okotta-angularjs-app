'use strict';

/**
 * @ngdoc overview
 * @name okottaApp
 * @description
 * # okottaApp
 *
 * Main module of the application.
 */

function translationProviderConf ($translateProvider) {
  // register german translation table
  $translateProvider.translations('de_DE', {
    'HEADLINE': 'Versicherung leicht gemacht',
    'CLAIM': 'Die Behauptung leicht gemacht',
    'ORGANISE': 'Putting in Ihrer Kontrolle',
    'OPTIMISE': 'Holen Sie sich Ruhe'
  });
  // register english translation table
  $translateProvider.translations('en_EN', {
    'HEADLINE': 'Insurance made simple',
    'CLAIM': 'Claiming made easy',
    'ORGANISE': 'Putting in your control',
    'OPTIMISE': 'Get peace of mind'
  });
  // which language to use?
  $translateProvider.preferredLanguage('en_EN');
}

angular
  .module('okottaApp', [
    'ngCookies',
    'ngRoute',
    'ngMaterial',
    'pascalprecht.translate'
  ],['$translateProvider', translationProviderConf])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });