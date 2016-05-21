/*! app.js © yamoo9.net, 2016 */
'use strict';

/**
 * --------------------------------
 * 모듈 로드
 * ----------------------------- */
require('./modernizr-custom');

// jQuery 버전 출력
// console.log($.fn.jquery);

// AngularJS 버전 출력
// console.log(angular.version.full);

/**
 * --------------------------------
 * AngularJS 모듈 정의
 */
var app = angular.module('RegisterApp',[]);

/**
 * --------------------------------
 * AngularJS 컨트롤러(Controller) 등록
 */
// app.controller('RegisterController', function() {});
app.controller('RegisterController', RegisterController);
// 등록 컨트롤러 정의
function RegisterController () {
  // 지역 변수
  // 외부에서 접근 불가
  var _formModel = {};
  var _onSubmit = function() {
    console.log('전송됨. :)');
    console.log(_formModel);
  };

  // 외부에 공개
  this.formModel = _formModel;
  this.onSubmit  = _onSubmit;
}

// -----------------------------------------------------

// 원피스 컨트롤러 정의
app.controller('OnepieceController', function($http) {
  var that = this;
  // 초기 설정 값
  this.member_search = '';     // 검색 필드는 비움
  this.order = 'name';         // 이름으로 정렬
  this.order_reverse = false;  // 오름 차순
  this.onepieceMembers = null; // 멤버 리스트

  // 컨트롤러 메소드 등록
  this.toggleOrder = function() {
    this.order_reverse = !this.order_reverse;
  };

  // 원피스 멤버 리스트 모델 데이터
  // 비동기로 데이터 받아오기
  $http
    .get('../data/onepiece.json')
    .then(function(response) {
      that.onepieceMembers = response.data;
    });

});