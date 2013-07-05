'use strict';

describe('Controller: BasicCtrl', function () {

  // load the controller's module
  beforeEach(module('scopeApp'));

  var BasicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasicCtrl = $controller('BasicCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
