angular.module('orgaTareas.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('forgotCtrl', function($scope) {})

.controller('signinCtrl', function($scope, $state, SPService) {

  $scope.signIn = function() {
     alert('Login to SharePoint');
     alert(SPService.Login());


     $state.go("tab.dash");
  };

});
