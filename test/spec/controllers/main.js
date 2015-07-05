'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('okottaApp'));
  beforeEach(module('ngCookies'));
  beforeEach(module('ngRoute'));
  beforeEach(module('ngMaterial'));
  beforeEach(module('pascalprecht.translate'));
  

  var MainCtrl,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of content blocks to the scope', function () {
    expect(scope.contentBlocksCollection.length).toBe(0);
  });
});
