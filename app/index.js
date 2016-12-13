var app = angular.module('kindgeek', ['ngMaterial'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('yellow')
});

app.controller('formCtrl', function ($scope, $window) {
  $scope.formModel = {};
  $scope.myDate = new Date();
  $scope.options = [
    { value: "1", name: "Option 1" },
    { value: "2", name: "Option 2" },
    { value: "3", name: "Option 3" },
    { value: "4", name: "Option 4" },
    { value: "5", name: "Option 5" }
  ];

  $scope.onSelect = function() {
    if($scope.stepOneForm.$valid) {
      $scope.step = 2;
    }
  };

  $scope.submitForm = function() {

    if ($scope.stepTwoForm.$valid && $scope.stepTwoForm.$valid) {
      $window.alert(JSON.stringify($scope.formModel));
    } else {
      $scope.stepOneForm.$setSubmitted();
      $scope.stepTwoForm.$setSubmitted();
    }
  };

  $scope.clearAll = function() {
    $scope.formModel = {};
    $scope.step = 1;
  }
});

