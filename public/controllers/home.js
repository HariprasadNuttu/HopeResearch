angular.module('HopeResearchApp')
.controller('HomeController', function ($scope) {
  $scope.signup_credentials = {};
  $scope.form={};
  $scope.rexp_email="/^(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*\s*[,]?\b)*$/"
})
