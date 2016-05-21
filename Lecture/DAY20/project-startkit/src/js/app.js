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

app.controller('ListController', ListController);

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

// 목록 컨트롤러 정의
function ListController() {
  // 모델 정의
  this.model = {
    "name": "몽키 D 루피",
    "shortname": "루피",
    "nickname": "밀짚모자",
    "image":"luffy",
    "regiment": "밀짚모자 해적단",
    "devil_fruit": "고무고무 열매",
    "position": "선장",
    "wanted": "5억 베리",
    "bio": "밀짚모자 해적단의 선장이자 본 작품의 주인공. 해적왕을 목표로 하고 있다. 악마의 열매 중 하나인 '고무고무 열매'를 먹은 뒤 온몸을 고무처럼 늘릴 수 있는 능력을 얻어 고무인간이 되었다. 패왕색의 패기 소유자. 자신의 능력을 잘 살린 격투기가 특기이며, 굉장히 낙천적인 성격의 소유자이다. 동료를 자신의 목숨보다도 더 아끼며, 엄청 많이 먹는 대식가. 하지만 살은 찌지 않는다. 가족관계는 해군중장 영웅 거프의 손자이자, 세계최악의 범죄자인 혁명가 몽키.D.드래곤의 아들이다. 그러니까 할아버지는 해군, 아버지는 혁명군, 자신은 해적. 3대가 서로를 적대한다."
  };

}