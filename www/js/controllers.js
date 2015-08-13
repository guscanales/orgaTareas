angular.module('orgaTareas.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('forgotCtrl', function($scope) {})

.controller('signinCtrl', function($scope, $state) {

  $scope.signIn = function() {
     alert('Login to SharePoint');


     $state.go("tab.dash");
  };

});
