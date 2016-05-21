'use strict';
/*! RegisterController.js © yamoo9.net, 2016 */

angular.module('DemoApp').controller('RegisterController',
  ['$scope', function($scope) {

  // 지역 변수
  // 외부에서 접근 불가
  var _formModel = {};
  var _onSubmit = function() {
    console.log('전송됨. :)');
    console.log(_formModel);
  };

  // 외부에 공개
  $scope.formModel = _formModel;
  $scope.onSubmit  = _onSubmit;

}]);