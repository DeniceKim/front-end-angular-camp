/*! PersonListController.js © yamoo9.net, 2016 */
'use strict';

var app = angular.module('PersonListApp');

app.controller('PersonListController', ['$scope', '$http', function($scope, $http){
    // 모델(데이터) 초기 값 설정
    $scope.persons = [];
    // $scope.selectedIndex 속성의 초기값 설정
    $scope.selectedIndex = null;
    // $scope.selectedPerson 속성의 초기값 설정
    $scope.selectedPerson = null;
    // 사용자가 검색하는 이름/메일을 포함하는 객체 초기 설정
    $scope.search = '';
    // 정렬(order) 초기값 설정
    $scope.order = 'name';

    // Ajax를 사용하여 모델 데이터 로드
    $http
      .get('../data/persons.json')
      .then(function successProcess(response) {
        $scope.persons = response.data.results;
      }, function errorProcess(response) {
        console.error('데이터 로드에 실패했습니다.');
      });

    // 스코프 내에서 사용되는 메소드를 정의
    $scope.settingReadingZero = function(idx) {
      if ( idx < 10 ) {
        idx = '0'+idx;
      }
      return idx;
    };

    // 메소드의 역할: $scope.selectedIndex 속성 값을
    // 사용자가 클릭한 <tr>의 인덱스($index) 값으로 설정
    $scope.selectPerson = function(idx, person) {
      $scope.selectedIndex = idx;
      $scope.selectedPerson = person;
      // console.log($scope.selectedPerson.name.first);
    };

    // 첫글자를 대문자로 변환해서 반환하는 메소드
    $scope.capitalize = function(str) {
      if (!str) { return ''; }
      var firstLetter = str.charAt(0).toUpperCase();
      return firstLetter + str.slice(1) + '.';
    };

    //
    $scope.setComma = function(str) {
      if (!str) { return ''; }
      return str + ',';
    };

    // AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NL, NZ, TR, US

    $scope.setNation = function(nation) {
      if (!nation) {return ''}
      switch(nation) {
        case 'AU': return 'Australia';
        case 'BR': return 'Brazil';
        case 'CA': return 'Canada';
        case 'CH': return 'Switzerland';
        case 'DE': return 'Germany';
        case 'DK': return 'Denmark';
        case 'ES': return 'Spain';
        case 'FI': return 'Finland';
        case 'FR': return 'France';
        case 'GB': return 'United Kingdom';
        case 'IE': return 'Ireland';
        case 'IR': return 'Iran';
        case 'NL': return 'Netherlands';
        case 'NZ': return 'New Zealand';
        case 'TR': return 'Turkey';
        case 'US': return 'United States';
      }
    };

    $scope.sensitiveSearch = function(person) {
      // 초기 로드할 때는 거짓이 나오도록 설정
      if ( $scope.search ) {
        return person.name.first.indexOf($scope.search) === 0 ||
               person.name.last.indexOf($scope.search) === 0 ||
               person.gender.indexOf($scope.search) === 0 ||
               person.email.indexOf($scope.search) === 0;
      }
      // 처음 로드할 때는 모든 조건이 참.
      return true;
    };

  }]);