angular.module('myApp', ['ngMessages'])
  .controller('myController', function($scope){

    // If Form is Valid, Hide Input & Show Output
    $scope.submit = function() {
      if($scope.myForm.$valid) {
        console.log('The form is valid');
        $scope.input = false;
        $scope.output = false;
      } else {
        console.log('The form is invalid');
      }
    };

    // Set Initial Display of App
    $scope.input = true;
    $scope.output = true;


    $scope.resetForm = function() {
      // Reset to Initial Display
      $scope.input = true;
      $scope.output = true;

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

});
