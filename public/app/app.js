angular.module('HopeResearchApp',['ngResource', 'ngRoute']).config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/sign_up', { templateUrl: '/views/sign_up.html', controller: 'SignUpController'})
        .when('/sign_in', { templateUrl: '/views/sign_in.html', controller: 'SignUpController'})
        .when('/forgot_password', { templateUrl: '/views/forgot_password.html', controller: 'SignUpController'})
          .when('/reset_password', { templateUrl: '/views/reset_password.html', controller: 'SignUpController'})
        $routeProvider.otherwise('/sign_in');
})
.controller('SignUpController', function ($scope,authenticationFactory) {
  $scope.signup_credentials = {};
  $scope.signin_credentials = {};
  $scope.form={};
  // $scope.rexp_email="/^(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*\s*[,]?\b)*$/";
  $scope.signIn=function(){
    authenticationFactory.signIn($scope.signin_credentials);
  }
  $scope.signUp=function(){
    authenticationFactory.signUp($scope.signup_credentials);
  }
  $scope.forgotPassword=function(){
    authenticationFactory.forgotPassword($scope.signup_credentials);
  }
  $scope.resetPassword=function(){
    authenticationFactory.resetPassword($scope.signup_credentials);
  }


  function setFormTouched(form_obj){
  angular.forEach(form_obj.$error, function (field) {
    angular.forEach(field, function (errorField) {
      if(angular.isDefined(errorField)){
        errorField.$setTouched();
      }

    })
  });
}

})

.service('authenticationFactory', function ($http,$q,ipservice) {
  var authenticationFactoryObj={
    signIn:function(params){
      console.log("HariprasadNuttu")
      var defferd=$q.defer();
      $http.post("users/sign_in",params)
      .success(function(data){
        if(data.success){
          defferd.resolve(data);
        }else{
          defferd.reject(data);
        }
      }).catch(function(error){
        defferd.reject(error);
      })
      return defferd.promise;
    },
    signUp:function(params){
      console.log("HariprasadNuttu")
      var defferd=$q.defer();
      $http.post("users/sign_up",params)
      .success(function(data){
        if(data.success){
          defferd.resolve(data);
        }else{
          defferd.reject(data);
        }
      }).catch(function(error){
        defferd.reject(error);
      })
      return defferd.promise;
    },
    forgotPassword:function(params){
      console.log("HariprasadNuttu")
      var defferd=$q.defer();
      $http.post("users/forgot_password",params)
      .success(function(data){
        if(data.success){
          defferd.resolve(data);
        }else{
          defferd.reject(data);
        }
      }).catch(function(error){
        defferd.reject(error);
      })
      return defferd.promise;
    },
    resetPassword:function(params){
      console.log("HariprasadNuttu")
      var defferd=$q.defer();
      $http.post("users/reset_password",params)
      .success(function(data){
        if(data.success){
          defferd.resolve(data);
        }else{
          defferd.reject(data);
        }
      }).catch(function(error){
        defferd.reject(error);
      })
      return defferd.promise;
    }
  }
  return authenticationFactoryObj;
})
.config(function($provide){
  $provide.constant('ipservice', {
          host: 'http://localhost:8080/'
    });
})
