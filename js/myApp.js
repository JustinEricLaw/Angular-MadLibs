angular.module('myApp', ['ngAnimate'])
  .controller('myController', ['$scope', function($scope){

    // Set Initial Display of App
    $scope.input = true;
    $scope.output = false;


    // If Form is Valid, Hide Input & Show Output
    $scope.submit = function() {
      if($scope.myForm.$valid) {
        console.log('The form is valid');
        $scope.input = false;
        $scope.output = true;
      } else {
        console.log('The form is invalid');
      }
    };


    $scope.resetForm = function() {
      // Reset to Initial Display
      $scope.input = true;
      $scope.output = false;

      // Reset Form to Unsubmitted State
      $scope.myForm.$setPristine();

      // Reset Form Fields to Blank
      $scope.celebrity = '';
      $scope.noun = '';
      $scope.objects = '';
      $scope.adjective = '';
      $scope.noun2 = '';
      $scope.beverage = '';
      $scope.dogname = '';
      $scope.place = '';
      $scope.liquid = '';
    };

}]);
