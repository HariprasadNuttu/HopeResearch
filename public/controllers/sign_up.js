angular.module('HopeResearchApp')
.controller('SignUpController', function ($scope) {
  $scope.signup_credentials = {};
  $scope.form={};
  $scope.rexp_email="/^(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*\s*[,]?\b)*$/"

  $scope.signIn=function(){
    console.log("heairpasad")
  }
})
